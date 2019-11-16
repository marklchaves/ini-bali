module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "assets/**.*",
    "icons/**.*",
    "bookend.json",
    "offline.html",
    "index.html"
  ],
  "swSrc": "src/sw.js",
  "swDest": "sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};