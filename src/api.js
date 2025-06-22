async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Request failed with ${res.status}: ${res.statusText}\n${text}`
    );
  }
  return res.json();
}

export function fetchMediaList() {
  return fetchJson('/api/media');
}

export function fetchMediaItem(id) {
  return fetchJson(`/api/media/${id}`);
}
