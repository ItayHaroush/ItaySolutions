const CACHE_NAME = "itay-proposals-shell-v3";
const SHELL = ["./index.html", "./site.webmanifest", "../assets/images/logoItayS.jpeg"];

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(SHELL);
		}).then(function () {
			return self.skipWaiting();
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
	if (event.request.method !== "GET") {
		return;
	}
	event.respondWith(
		caches.match(event.request).then(function (cached) {
			return cached || fetch(event.request);
		})
	);
});
