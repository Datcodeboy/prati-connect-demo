const CACHE_NAME = 'prati-connect-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://raichu-uploads.s3.amazonaws.com/logo_prati-donaduzzi_I0eXhm.jpg',
  'https://th.bing.com/th/id/OIP.P35wYDopyu9dJz2qQSKCsQAAAA?w=300&h=210&rs=1&pid=ImgDetMain'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

