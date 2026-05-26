// Service Worker for LEP website
// Enables offline navigation and caches critical resources

const CACHE_NAME = 'lep-v1';
const URLS_TO_CACHE = [
  '/',
  '/LEP/',
  '/LEP/for-students/',
  '/LEP/people/',
  '/LEP/events/',
  '/LEP/lineage/',
  '/LEP/about/',
  '/assets/css/main.css',
  '/LEP/assets/css/main.css',
  '/assets/js/site-enhanced.js',
  '/LEP/assets/js/site-enhanced.js',
  '/index.html',
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE).catch(err => {
        console.log('Cache addAll error:', err);
        // Continue even if some URLs fail to cache
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate service worker and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-first strategy for pages, cache-first for assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // For HTML pages: try network first, fall back to cache
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request).then(response => {
        // Clone the response
        const clonedResponse = response.clone();
        
        // Update cache with fresh content
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, clonedResponse);
        });
        
        return response;
      }).catch(() => {
        // Fall back to cache if network fails
        return caches.match(request).then(response => {
          return response || caches.match('/offline.html');
        });
      })
    );
  } else {
    // For assets: cache first, fall back to network
    event.respondWith(
      caches.match(request).then(response => {
        if (response) {
          return response;
        }
        
        return fetch(request).then(response => {
          // Cache successful responses
          if (response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, clonedResponse);
            });
          }
          return response;
        }).catch(() => {
          // Return a placeholder for failed images
          if (request.destination === 'image') {
            return caches.match('/assets/images/placeholder.png');
          }
        });
      })
    );
  }
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
