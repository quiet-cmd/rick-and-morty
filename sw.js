const staticCacheName =  'static-site'
const dynamicCacheName =  'dynamic-site'

const ASSETS = [
  '/',
  '/index.html',
]

self.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)

});

self.addEventListener('activate', async (event) => {
  const cacheKeys = await caches.keys();
  await Promise.all(
    cacheKeys.filter(key => key !== staticCacheName).map(key => caches.delete(key))
  )
});

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request)
  try {
    return cached ?? await fetch(request).then(response => networkirst(request))
  } catch(e) {
    return networkirst(request)
  }
    
}

async function networkirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch(e) {
    const cached = await cache.match(request)
    return cached
  }
}