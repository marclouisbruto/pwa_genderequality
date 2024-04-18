/* Ito yung Service Worker - Ang primary function nito siya yung nagsasave ng files ng nakadeclare para if ever offline ang app yung nakasave ang iloload and if ever na online ulit si SW ang magccheck sa server if may changes sa data and maguupdate */

/* Ito yung name ng Cache (mit502-pwa) kapag sinave yung data/files sa browser */
var cacheName = 'mit502-pwa';
/* Ito yung name mga files na iccache/ issave sa browser */
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js',
  'images/logo-72x72.png',
  'images/logo-96x96.png',
  'images/logo-128x128.png',
  'images/logo-144x144.png',
  'images/logo-152x152.png',
  'images/logo-192x192.png',
  'images/logo-384x384.png',
  'images/logo-512x512.png',
  'images/logo.ico',
  'img/240-2403525_equality-symbol-png-gender-equality-clipart-transparent-png-removebg-preview.png',
  'img/colorful-equal-rights-symbol-concept.jpg',
  'img/colorful-equal-rights-symbols-concept.jpg',
  'img/equal-pay-rights-workplace-gender-symbols-copy-space.jpg',
  'img/equality-man-woman-flat-lay.jpg',
  'img/equality-written-wooden-cubes-people.jpg',
  'img/gay-pride.jpg',
  'img/Gender_Equality_slogan-removebg-preview.png',
  'img/green-female-blue-male-gender-symbols-quality-concept-copy-space.jpg',
  'img/hand-holding-colorful-equality-symbol.jpg',
  'img/Image.png',
  'img/international-women-s-day-movement.jpg',
  'img/offive04-1.jpg',
  'img/OIP.jpg',
  'img/png-transparent-gender-and-development-gender-equality-gender-identity-woman-woman-blue-text-trademark-removebg-preview.png',
  'img/view-hands-with-fists-up-womens-day-celebration.jpg'

];

/* Once nagload ang page/file iccache lahat ng nakaedeclare na files sa taas filesToCache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Kapag nagoffline ang app mo ito yung mga iloload nya na nakacache doon sa var filesToCache */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});