var CACHE_NAME = "meu-site-cache-v1";
var urlsToCache = [
	"https://odougzin.site/turboslots/",
	"https://odougzin.site/turboslots/Styles/style.css",
	"https://odougzin.site/turboslots/Js/app.js",
];

self.addEventListener("install", function (event) {
	// Realize a instalação do Service Worker
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log("Cache aberto");
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", function (event) {
	// Responda com os recursos armazenados em cache
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// Se encontrarmos uma resposta em cache, a retornamos
			if (response) {
				return response;
			}
			// Senão, solicitamos o recurso da rede
			return fetch(event.request);
		})
	);
});
