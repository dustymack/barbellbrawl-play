// Minimal service worker so the brawl prototype can be installed as a web app (brawl.webmanifest).
// It never caches: every request goes straight to the network, so a republished prototype shows up on the next load.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
