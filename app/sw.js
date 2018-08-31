/* Register the Service Worker */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
    .then(function(reg) {
      console.log('YAY!');
    }).catch(function(err) {
      console.log('boo!');
    });
}
