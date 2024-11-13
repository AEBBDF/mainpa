const CACHE_NAME = 'artx-main-v1';
const urlsToCache = [
    'index.html',
    'manifest.json',
    'logo.png',
    'icons/google.png',
    'icons/ensonhaber.png',
    'icons/akit.png',
    'icons/yenisafak2.png',
    'icons/shiftdelete.png',
    'icons/pinterest.png',
    'icons/youtube.png',
    'icons/adobeexp2.png',
    'icons/udemy.png',
    'icons/deepl2.png',
    'icons/wetransfer.png',
    'icons/matbuu.png',
    'icons/googledrive.png',
    'icons/googleplay.png',
    'icons/freepik.png',
    // diğer ikonlarınız...
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});