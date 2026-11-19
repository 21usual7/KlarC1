/* Klar C1 service worker: offline fallback + cache of hashed Next.js static files.
 *
 * What is cached:
 * - /_next/static/* — content-hashed files, cache-first (a new deploy has new URLs).
 * - /offline.html — precached, shown when a page cannot be loaded without network.
 * - HTML pages only when the response is explicitly public (no `no-store`/`private`) and the page is not
 *   an auth page. Next.js sends `Cache-Control: private, no-cache, no-store` for pages rendered per request
 *   (the main app checks the session cookie), so pages with a login state are never stored.
 * What is never touched: /api/*, non-GET requests, other origins, RSC/data fetches.
 *
 * Bump VERSION when this file's caching logic changes: `activate` deletes caches of other versions.
 */
const VERSION = 'v1';
const STATIC_CACHE = `klar-static-${VERSION}`;
const PAGES_CACHE = `klar-pages-${VERSION}`;
const OFFLINE_URL = '/offline.html';
const STATIC_MAX_ENTRIES = 300;
const AUTH_PATHS = ['/login', '/register', '/verify-email', '/forgot-password', '/reset-password'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(PAGES_CACHE);
    await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = new Set([STATIC_CACHE, PAGES_CACHE]);
    const names = await caches.keys();
    await Promise.all(names.filter(n => n.startsWith('klar-') && !keep.has(n)).map(n => caches.delete(n)));
    if (self.registration.navigationPreload) await self.registration.navigationPreload.enable();
    await self.clients.claim();
  })());
});

const isAuthPath = path => AUTH_PATHS.some(p => path === p || path.startsWith(p + '/'));

/** Only explicitly cacheable responses: 200, same-origin, no redirect, no no-store/private, no cookie. */
function storable(response) {
  if (!response || response.status !== 200 || response.type !== 'basic' || response.redirected) return false;
  const cc = (response.headers.get('Cache-Control') || '').toLowerCase();
  if (/no-store|private/.test(cc)) return false;
  // Browsers hide Set-Cookie from service workers; the check is kept for the rare case it is visible.
  if (response.headers.has('Set-Cookie')) return false;
  return true;
}

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

async function staticCacheFirst(request) {
  const cached = await caches.match(request, { cacheName: STATIC_CACHE });
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic' && !/no-store/i.test(response.headers.get('Cache-Control') || '')) {
    const cache = await caches.open(STATIC_CACHE);
    await cache.put(request, response.clone());
    trim(STATIC_CACHE, STATIC_MAX_ENTRIES).catch(() => {});
  }
  return response;
}

async function navigationNetworkFirst(event, url) {
  try {
    const response = (await event.preloadResponse) || (await fetch(event.request));
    if (!isAuthPath(url.pathname) && storable(response)) {
      const copy = response.clone();
      event.waitUntil(caches.open(PAGES_CACHE).then(cache => cache.put(url.pathname, copy)));
    }
    return response;
  } catch {
    const cached = isAuthPath(url.pathname) ? undefined : await caches.match(url.pathname, { cacheName: PAGES_CACHE });
    return cached || (await caches.match(OFFLINE_URL, { cacheName: PAGES_CACHE })) || Response.error();
  }
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(navigationNetworkFirst(event, url));
    return;
  }
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(staticCacheFirst(request));
  }
  // Everything else (RSC payloads, icons, manifest, sw.js) goes to the network as usual.
});
