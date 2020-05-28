/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/hexo/public/2020/05/08/PHP基础函数/index.html","f7ffa8f348de0c045de6dee7059ec746"],["D:/hexo/public/2020/05/08/hello-world/index.html","33e21620318b6f4a39875c0e6184df0e"],["D:/hexo/public/2020/05/08/面试题-01/index.html","fecab796c81de38f971f31aa3f59b6b0"],["D:/hexo/public/404.html","e721b350a90d1d320d2de5ba5f217ba4"],["D:/hexo/public/archives/2020/05/index.html","52e166b83492d0d55a4fbf87ad48a7f1"],["D:/hexo/public/archives/2020/index.html","3234c890243619565022797802919233"],["D:/hexo/public/archives/index.html","5f278f61b4d0a0f687c6f4cd35d39683"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/categories/PHP/index.html","659756751c818dd40fbe8f83f136216a"],["D:/hexo/public/categories/index.html","29cf78214912accad28331c8ea956293"],["D:/hexo/public/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["D:/hexo/public/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["D:/hexo/public/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["D:/hexo/public/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["D:/hexo/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/hexo/public/css/index.css","c653c72f1ca9f363e8fc288614111af0"],["D:/hexo/public/css/style.css","e67a267d2af2a8b53715207a13c08176"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["D:/hexo/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["D:/hexo/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["D:/hexo/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["D:/hexo/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["D:/hexo/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["D:/hexo/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["D:/hexo/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["D:/hexo/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["D:/hexo/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["D:/hexo/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["D:/hexo/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["D:/hexo/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["D:/hexo/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["D:/hexo/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["D:/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/index.html","b420dcec0910ca427e9f8b155d9f7191"],["D:/hexo/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/public/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["D:/hexo/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/public/link/index.html","19b20e078b0400f5239a9a69fdb676ff"],["D:/hexo/public/movies/index.html","a1b39b1c7ce785608204456540355e70"],["D:/hexo/public/musics/index.html","ab053fd7c0efeb60c9e408949fe84d1c"],["D:/hexo/public/photos/index.html","fb4a85e7b6c739f8a747932717bae7b3"],["D:/hexo/public/tags/PHP函数/index.html","ae3ac25be18da195e2143f446014a12f"],["D:/hexo/public/tags/index.html","31afee9f2df8d62b8b8855b3761c1366"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







