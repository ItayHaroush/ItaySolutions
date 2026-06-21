const CACHE_NAME = "itay-proposals-shell-v4";
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
	event.waitUntil(
		caches.keys().then(function (keys) {
			return Promise.all(
				keys.filter(function (key) {
					return key !== CACHE_NAME;
				}).map(function (key) {
					return caches.delete(key);
				})
			);
		}).then(function () {
			return self.clients.claim();
		})
	);
});

self.addEventListener("fetch", function (event) {
	if (event.request.method !== "GET") {
		return;
	}

	const requestUrl = new URL(event.request.url);
	if (requestUrl.origin !== self.location.origin) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then(function (cached) {
			return cached || fetch(event.request);
		})
	);
});
