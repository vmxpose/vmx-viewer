# VMX Media Viewer

This project provides a simple web application for browsing and viewing
images or videos. It is built with **React**, **Vite** and a small
**Express** server. Media files are stored in individual folders under
`public/media`.

## 1. File structure overview

```
/ (project root)
├─ index.html             # entry HTML page
├─ public/
│  └─ media/               # folders for each media file
│     ├─ image1/
│     │  ├─ index.json
│     │  └─ <image file>
│     └─ video1/
│        ├─ index.json
│        └─ <video file>
├─ src/
│  ├─ App.jsx              # application routes
│  ├─ main.jsx             # React entry
│  ├─ api.js               # API helpers
│  └─ components/
│     ├─ MediaLibrary.jsx
│     └─ MediaViewer.jsx
├─ server/
│  ├─ server.js            # Express server
│  └─ media-data.json      # example JSON describing media
├─ vite.config.js          # Vite configuration
└─ package.json            # dependencies and scripts
```

Each media item lives in its own folder under `public/media` with a JSON
file describing the item. The server also exposes a unified
`server/media-data.json` file to provide a quick list of items.
Add your actual image or video files to these folders as needed; the
repository includes only the JSON metadata.

## 2. Key technologies and frameworks

- **React** with **React Router** for the UI components and navigation
- **Vite** for the development server and bundling
- **Express** as a lightweight backend serving the API and static files

## 3. Sample code snippets

### Media library component
```jsx
// src/components/MediaLibrary.jsx
useEffect(() => {
  fetchMediaList().then(setMedia).catch(console.error);
}, []);
...
{media.map(item => (
  <li key={item.id}>
    <Link to={`/media/${item.id}`}>{item.title}</Link>
  </li>
))}
```

### Media viewer component
```jsx
// src/components/MediaViewer.jsx
{item.type === 'image' && (
  <img src={`/media/${id}/${item.file}`} alt={item.title} />
)}
{item.type === 'video' && (
  <video controls src={`/media/${id}/${item.file}`} />
)}
```

### File storage example
```json
// public/media/image1/index.json
{
  "id": "image1",
  "title": "Sample Image",
  "type": "image",
  "file": "image.png"
}
```

## 4. Setup and deployment

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Open <http://localhost:5173> to view the app during development.
3. Build for production and start the Express server:
   ```bash
   npm run build
   npm start
   ```
   The server hosts the built app from `dist` on
   <http://localhost:3000>.

## 5. Considerations for media handling

- Supported formats depend on the browser but typically include JPEG,
  PNG, GIF for images and MP4, WebM for video.
- Large files can impact load times. Consider compressing media and
enabling HTTP range requests for video streaming in production.
- The current setup loads a single JSON list of items. For very large
  collections, a database or pagination may be appropriate.

The code is intentionally small and focused on clarity to help you adapt
it for your own media collections.
