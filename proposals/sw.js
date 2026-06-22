const CACHE_NAME = "itay-proposals-shell-v5";
const SHELL = [
	"./index.html",
	"./site.webmanifest",
	"./proposal-backend-config.js",
	"../assets/images/logoItayS.jpeg"
];

function isDynamicRequest(request) {
	const url = new URL(request.url);

	if (request.mode === "navigate") {
		return true;
	}

	if (url.pathname.endsWith(".html")) {
		return true;
	}

	if (url.pathname.endsWith(".json")) {
		return true;
	}

	if (url.pathname.includes("/proposals/") && url.pathname.includes("-2026/")) {
		return true;
	}

	return false;
}

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

self.addEventListener("message", function (event) {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});

self.addEventListener("fetch", function (event) {
	if (event.request.method !== "GET") {
		return;
	}

	const requestUrl = new URL(event.request.url);
	if (requestUrl.origin !== self.location.origin) {
		return;
	}

	if (isDynamicRequest(event.request)) {
		event.respondWith(
			fetch(event.request).then(function (response) {
				if (response && response.ok) {
					const copy = response.clone();
					caches.open(CACHE_NAME).then(function (cache) {
						cache.put(event.request, copy);
					});
				}
				return response;
			}).catch(function () {
				return caches.match(event.request);
			})
		);
		return;
	}

	event.respondWith(
		caches.match(event.request).then(function (cached) {
			const networkFetch = fetch(event.request).then(function (response) {
				if (response && response.ok) {
					const copy = response.clone();
					caches.open(CACHE_NAME).then(function (cache) {
						cache.put(event.request, copy);
					});
				}
				return response;
			});
			return cached || networkFetch;
		})
	);
});
