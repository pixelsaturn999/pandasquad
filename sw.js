/* Panda Squad Service Worker */
const CACHE = 'pandasquad-v3';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (new URL(e.request.url).hostname !== self.location.hostname) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
