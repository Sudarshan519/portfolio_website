'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "172661f7a237bd44c35101faf594c151",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
".git/config": "d367566ef15487db2e6020db9de5d096",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/portfolio": "9058318c6efdcfb50d333fe34985c3e2",
".git/refs/remotes/origin/main": "05abd184922af71f4743fd71173ef670",
".git/refs/remotes/origin/master": "647cd2a0ff4ab0140b5a4ff57d283dc1",
".git/refs/heads/portfolio": "9058318c6efdcfb50d333fe34985c3e2",
".git/refs/heads/main": "05abd184922af71f4743fd71173ef670",
".git/refs/heads/master": "bf3eba3dab90e7411063d3631c695778",
".git/index": "ea3a6c05ad2d131af9bf623e76834714",
".git/FETCH_HEAD": "00be2129ac30c460f5e7bc82d363ba8d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/42/a7c6de8bf0d210e61bf730471b4e3803a53fad": "e99583432f59f1461d799ffe4e86ad44",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ad6ecc6c59d0a8c64eb2eb17148450eb1d4fdd": "6e0eab05c5f1475264d7652bd128255c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/96/455a7080b63b6f784722b07d9e26d26388f569": "53778fcb00fda5272e6862ad156c6cde",
".git/objects/3d/b92fc02c61324ff4c0e29cd680623e65200afb": "bbb5a10f3b73db63811e502402739c8b",
".git/objects/f8/6e3c389d8f157d2087f5c41a4adaf96b9bda0f": "9f57a90d0be411439e1baba6eceb5908",
".git/objects/55/5cd4dd6419e8ae5f65e3f80e33cb2fae0bcc7e": "9bbc02977e5e0bc0b9b763f04e6ef29c",
".git/objects/3b/0740195b3f82599ec2c4f91814ebbf5a74c482": "ddbf40fbfcc49e930104d67e78d50a98",
".git/objects/67/748fb3313ea492f168eb6945f73bce3b90ab91": "a22b1c801ccaa4e5eb1d9a1ff3b05c30",
".git/objects/67/3312322e243db90be82d08720a223fb2c91cac": "1c52c7ffa6894d214d654590fcecbb5c",
".git/objects/9b/bc867c9037efa4a385b577e00b2e64738f4e66": "0792aa3977296de35532423863e51a28",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d0/fc8316af16b612050d7e2fc72077e1bdd82057": "9415f674f4d70bc7e9fc6a3848c3087a",
".git/objects/61/5f7b210aa3fade6e3b01520d02c2f33aac74f9": "e3a54fe31f0abf9cfa2ce1b8cbf746ec",
".git/objects/dd/7317a696c4f2dda3223cc6ef888f70056a90f8": "dfb2eae486fbd81a99d32ad0a272090e",
".git/objects/d8/2f930df3b265e1cb891c0f096bdc42e0b5ba7b": "2613c00f0686086416543d23b0bbde8c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/6f/20100d0bb73228adc5325b39df91137b64ff52": "50dcc33f29cd86544b21381a1ec741b7",
".git/objects/b6/333d3f498dbe05644bd0fb955f66b960f8d1d4": "88ee335cdbefc9009cf5ffa20b9672a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3a/6e833d1266198badf14c8f2167f12d51417ef4": "64d3329052feeedde8becafd579ed2a2",
".git/objects/54/a0b730be27e4763a8217fd0e79e2cd84720fc6": "18de60658c825e7a493881f0cb590ab2",
".git/objects/f0/62040712bac3eb8287b82d4d4afc44a6fca114": "8ad7e9b9ccf480b3e0ca9d4afcbf34be",
".git/objects/93/a7fd4c15d8986d36c1a1c635ea61dbcb3e7bb7": "d6b6166facf5e5de8f9514aa0f8ab207",
".git/objects/02/1dbe44d20a1970b9b95c3b9101ad54260d078b": "05fb7c8699bcbbaf9d38f42e5d165eda",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/3e/d6430483bcc198899cfdacdcf6fe1d06b8f6fc": "bc4005d5d6af67df8b88b3efb2a20618",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/b5/8fc16ffe65931ded5de27d69b47bb4ff0a8144": "174a4c37ecdfcb632a810d6f22ed0b01",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/83/59dc4874bb6811263dc6cb73a9ef4a6275732e": "332b3f0646161822357fa4ed5b1f0ea4",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/21/d79700322b40dd7d4c628ba7d4e42add4a3141": "0c6ebd1c511f55093e36bee26958cb23",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/f129d30362d46abec3d072ffa1eb687536c3d6": "9080193cbfab79ba19ca99d5ee601488",
".git/objects/c9/f85033bed53beb826a75c1fa79c995cd18cb38": "8d11c5488c7b9fc5861e79ddc3d49470",
".git/objects/c9/5640248c4cf462c46f793a36e23bb17974e98c": "5108ea5d821c935542d7b325fb3c4f7f",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/27/aae2615e1736342ed95739b8a41a64d7e89f75": "1df721acfc9d24429ee8e4c8beecabaf",
".git/objects/86/3361ee6d49660ce2bb5b0889eb298d8ac38542": "1fcb580eecd85cd7b78726a19feadabb",
".git/objects/6d/52860f96ee5a2094d83bc4ed406cc07db95f46": "2c27f48600201f22f8fc97ad5f3c9bba",
".git/logs/HEAD": "612c026a49832674c5e53a368ae103d5",
".git/logs/refs/remotes/origin/portfolio": "dad0c9e58a73af7d7010cfa79eae2a33",
".git/logs/refs/remotes/origin/main": "b04c9830af524a874d9f546e4d58cc80",
".git/logs/refs/remotes/origin/master": "0d39ab9bae3ab9982e7e23ca9474c390",
".git/logs/refs/heads/portfolio": "92befcb8d115e6316e58ed424f6d0b88",
".git/logs/refs/heads/main": "84cbc2aaca060c7257c663d929893afe",
".git/logs/refs/heads/master": "3b0f54cfbcc1705df402e9332d65ffff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/ORIG_HEAD": "9058318c6efdcfb50d333fe34985c3e2",
".git/AUTO_MERGE": "80104a68f4d1fc693d239f1058903d5b",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "a67989697c366cf4f821bde4733a6ca8",
"index.html": "aa59047f893dccfe345a054214d6e9b8",
"/": "aa59047f893dccfe345a054214d6e9b8",
"main.dart.js": "e9708b95b6953195b5fc9012cdb02a92"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
