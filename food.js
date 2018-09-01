
const cachePrimary = [
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
];

self.addEventListener('install', (event => {
  event.waitUntil(

  caches.open('version1').then(cache => {
    console.log('this is working!');
    return cache.addAll(cachePrimary);           //This is working!!
  }));
}));

self.addEventListener('fetch', function(event) {

  // event.respondWith(
  //   caches.match(event.request).then(function(response) {
  //     if (response) {
  //       return response;
  //     }
  //     else {
  //       return fetch(event.request)
  //   }}).catch(function(error) {
  //     console.log(`There was an error in fetching from the cache. Error: ${err}`);
  //   }));
  });


    // console.log('this is a test!');
