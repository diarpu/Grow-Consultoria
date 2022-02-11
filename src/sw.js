// import {manifest, version} from '@parcel/service-worker';

// async function install() {
//   const cache = await caches.open(version);
//   await cache.addAll(manifest);
// }
// addEventListener('install', e => e.waitUntil(install()));

// async function activate() {
//   const keys = await caches.keys();
//   await Promise.all(
//     keys.map(key => key !== version && caches.delete(key))
//   );
// }
// addEventListener('activate', e => e.waitUntil(activate()));


//Asignar un nombre y versión al cache
const CACHE_NAME = 'grow_cache_v1',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&display=swap',
    './assets/images/favicons/favicon.png',
    './assets/images/grow-logo.png',
  ]

//Durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//Una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//Cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})

