import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/media', async (req, res) => {
  const data = JSON.parse(await fs.readFile(path.join(__dirname, 'media-data.json')));
  res.json(data);
});

app.get('/api/media/:id', async (req, res) => {
  const data = JSON.parse(await fs.readFile(path.join(__dirname, 'media-data.json')));
  const item = data.find(m => m.id === req.params.id);
  if (item) res.json(item);
  else res.status(404).json({ error: 'Not found' });
});

// Serve the pre-built client and media files
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Fallback for client-side routing
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'dist') });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
