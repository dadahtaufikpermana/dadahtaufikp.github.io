'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"main.dart.js": "d5d7c6257c640b786891e6b25ac868f4",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"assets/NOTICES": "2c65b1e5921e2688b948f3df372b733b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/NOTICES": "6fe531b59d4c298b4d09eccbe3c25c8e",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/person.png": "cba1476ee5d09ece3f5d3ba8438770f6",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/assets/images/technology/kotlin.png": "9f91e9f491b258c14d51b48bd61541e7",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/assets/images/technology/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/projects/02.jpeg": "00fd4620c4fbd8df78062887291658cf",
"assets/assets/images/projects/05.jpeg": "103ccf9257737d44185e9eeb6ad5d33e",
"assets/assets/images/projects/04.jpeg": "5aafae425ce6b5128c33ec0d87d027b8",
"assets/assets/images/projects/01.jpeg": "abe2fcc10f698258392899cda70cc393",
"assets/assets/images/projects/03.jpeg": "585e3bf33be8eb17307bdb79ba51ed89",
"assets/assets/AssetManifest.smcbin": "2a7bb93b2e5c6517c2f46285a722f6aa",
"assets/assets/AssetManifest.json": "3bd1a59b14592731a5017070d2eecbba",
"assets/assets/svg/guy.svg": "384b0cd380b8ce087e170fe5b3dc7f6b",
"assets/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "ae4ae5439336f14093e5e52a1d216635",
"assets/AssetManifest.json": "062402062573541623f864cf267682d1",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"assets/fonts/MaterialIcons-Regular.otf": "8121e9ff5c6767a5c4d46300438b2483",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "7423567cd296e8d07723d90dc175d425",
"index.html": "0614703758ce06462390cc6cd2031f88",
"/": "0614703758ce06462390cc6cd2031f88",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
