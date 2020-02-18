importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.googleAnalytics.initialize();

workbox.core.setCacheNameDetails({
  prefix: 'emiga-tech',
  suffix: 'v1.0.1',
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
  '/assets/css/style.css',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://d33wubrfki0l68.cloudfront.net/css/60e85362efeb915debf2b2aba8a5ba3d69339c1c/assets/css/style.css',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://d33wubrfki0l68.cloudfront.net/cd45afb054222bb40057cd9785471c13df65ad08/307c2/images/emiga.tech-logo.png',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  'https://d33wubrfki0l68.cloudfront.net/js/ee6a3c8450d624dde0303dd893f8137f38acef3e/assets/js/script.js'https://d33wubrfki0l68.cloudfront.net/js/ee6a3c8450d624dde0303dd893f8137f38acef3e/assets/js/script.js,
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/assets/emiga.tech-logo.png',
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  '/assets/js/script.css',
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

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=152945cf366446688129bd121c63cd5c'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'api-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);
  
workbox.precaching.precacheAndRoute([]);