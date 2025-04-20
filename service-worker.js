const CACHE_NAME = 'prati-connect-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://raichu-uploads.s3.amazonaws.com/logo_prati-donaduzzi_I0eXhm.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
