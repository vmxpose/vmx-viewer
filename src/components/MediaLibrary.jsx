import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMediaList } from '../api';

export default function MediaLibrary() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMediaList().then(setMedia).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Media Library</h1>
      <ul>
        {media.map(item => (
          <li key={item.id}>
            <Link to={`/media/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
