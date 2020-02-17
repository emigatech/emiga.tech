var cacheName = 'emiga-tech-cache-v1.0.0'; 
var filesToCache = [
	'/',    
	'/index.html',    
	'assets/css/style.css',  
	'assets/js/script.js',
	'https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=152945cf366446688129bd121c63cd5c',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
	'https://unpkg.com/aos@2.3.1/dist/aos.css',
	'https://code.jquery.com/jquery-3.4.1.min.js',
	'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js',
	'https://unpkg.com/aos@2.3.1/dist/aos.js',
	'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js',
	'assets/emiga.tech-logo.png'  
];  


self.addEventListener('install', function(e) { 
	e.waitUntil(
		caches.open(cacheName).then(function(cache) { 
			return cache.addAll(filesToCache);   
		})    
	);  
}); 

self.addEventListener('fetch', function(e) {  
	e.respondWith(
		caches.match(e.request).then(function(response) {  
			return response || fetch(e.request);
		})   
	);  
});