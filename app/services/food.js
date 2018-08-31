import Service from '@ember/service';

export default Service.extend({
  /* Register the Service Worker */
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/food.js')                  //this line is working!
    self.addEventListener('install', (event => {
      event.waitUntil(
        caches.open('cache1')
        .then(cache => {
          return cache.addAll([
            */restaurants.html*
          ]);
        });
      )
      .catch(err => {
        console.log(`sw:error: ${err}`);
      })
    });
  }



});
