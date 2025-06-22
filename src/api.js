export async function fetchMediaList() {
  const res = await fetch('/api/media');
  return res.json();
}

export async function fetchMediaItem(id) {
  const res = await fetch(`/api/media/${id}`);
  return res.json();
}
