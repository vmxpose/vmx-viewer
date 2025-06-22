import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MediaLibrary from './components/MediaLibrary';
import MediaViewer from './components/MediaViewer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MediaLibrary />} />
      <Route path="/media/:id" element={<MediaViewer />} />
    </Routes>
  );
}
