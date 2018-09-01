
const cachePrimary = 'rCache1';

self.addEventListener('install', (e => {
  caches.open('cachePrimary').then(cache => {
    return cache.addAll([
      '/',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/css/styles.css',
      '/data/restaurants.json',
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg',
      '/img/8.jpg',
      '/img/9.jpg',
      '/img/10.jpg',
      '/services/food.js',
      'app.js',
      'CODEOWNERS',
      'index.html',
      'README.md',
      'restaurant.html',
      'router.js'
    ]);
  });
}));

// self.addEventListener('activate', (e => {
//   console.log('sw: Activated!');
// }))

self.addEventListener('fetch', (e => {
  event.respondWith(cache.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(networkResponse) {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    }).catch(err => {
      console.log(`There was an error in fetching from the cache. Error: ${err}`);
    });
  }))
}))
