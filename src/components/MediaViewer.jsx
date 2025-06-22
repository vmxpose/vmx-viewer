import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMediaItem } from '../api';

export default function MediaViewer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchMediaItem(id).then(setItem).catch(console.error);
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Back to library</Link>
      <h1>{item.title}</h1>
      {item.type === 'image' && (
        <img src={`/media/${id}/${item.file}`} alt={item.title} />
      )}
      {item.type === 'video' && (
        <video controls src={`/media/${id}/${item.file}`} />
      )}
    </div>
  );
}
