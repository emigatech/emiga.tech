importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.googleAnalytics.initialize();

workbox.core.setCacheNameDetails({
  prefix: 'emiga-tech',
  suffix: 'v1.2.12',
  precache: 'emiga-tech-custom-precache-name',
  runtime: 'emiga-tech-custom-runtime-name'
});


workbox.routing.registerRoute(
  '/index.html',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/search.xml',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/assets/css/style.css',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/assets/emiga-logo.png',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/assets/js/script.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://code.jquery.com/jquery-3.4.1.min.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://unpkg.com/aos@2.3.1/dist/aos.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  ({ url }) => fetch(url.href).catch(() => caches.match('/'))
);

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'css-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);

// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg|gif|json)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.precaching.precacheAndRoute([]);