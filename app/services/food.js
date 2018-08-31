const listUrl = [
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

const cachePrimary = 'rCache1';

self.addEventListener('install', (e => {
  caches.open(cachePrimary).then(cache => {
    cache.addAll(listUrl);
  }));
}));
