# ini bali : this is bali Progressive Web AMP

Iya, you read that right. an AMP story running as a PWA. sick.

Ini bali means this is bali. AMP means mobile first. PWA means more control over browser caching and can run offline if needed.

---

[live version](https://inibali.netlify.com/)

---

[based on the Build a Progressive Web AMP code lab](https://codelabs.developers.google.com/codelabs/amp-pwa-workbox/#0)

---

## Give it a Try

1. Bring up the [ini bali AMP story](https://inibali.netlify.com/)
 in your fave browser, then kill your network connection. Reload the page.
2. Bring up _ini bali_ using Google **Chrome** on your desktop or laptop. When you see the `+` icon in your address bar, click it to install on your desktop. Try running ini bali with and without internet.
3. Bring up _ini bali_ on **Safari** on you iPhone. Press the share icon. Swipe up and press on **Add to Home Screen**. Run the app with and without internet on your iPhone.

---

## About AMP and PWA

[Accelerated Mobile Page by Google and Twitter](https://amp.dev/)

[Progressive Web Apps by Google](https://developers.google.com/web/progressive-web-apps)

---

## Screen Grabs

### Installing ini bali via Safari on iOS

<img alt="ini bali iphone add to home page 1" title="ini bali iphone add to home page 1" src="screen-grabs/inibali-safari-ios-1.jpg">

<img alt="ini bali iphone add to home page 2" title="ini bali iphone add to home page 2" src="screen-grabs/inibali-safari-ios-2.jpg">

---

### Browser Caching Benchmarks

Click on image for larger version, if available. Then click the `Download` button to view the full size.

#### No Browser Caching Going On

<a href="screen-grabs/avada-classic-http-cache-1420w.jpg">
<img alt="No HTTP browser caching" title="No HTTP browser caching" src="screen-grabs/avada-classic-http-cache-800w.jpg">
</a>

  No HTTP browser caching. If there were, we would see some zero load times and see some _from cache_ messages in the _size_ column.

---

<img alt="No application caching (not a PWA)" title="No application caching (not a PWA)" src="screen-grabs/avada-classic-application-cache-800w.jpg">

  Obviously, no application caching (not a PWA).

---

<a href="screen-grabs/inibali-amp-pwa-http-cache-1420w.jpg">
<img alt="HTTP browser caching enabled" title="HTTP browser caching enabled" src="screen-grabs/inibali-amp-pwa-http-cache-800w.jpg">
</a>

HTTP browser caching enabled. We can see some zero load times and see some _memory cache_ messages in the _size_ column. Zero load times are _sweet_.

---

<a href="screen-grabs/inibali-amp-pwa-precache-1420w.jpg">
<img alt="Pre-caching (PWA)" title="Pre-caching (PWA)" src="screen-grabs/inibali-amp-pwa-precache-800w.jpg">
</a>

  Pre-caching static files. Definitely a PWA.

---

<a href="screen-grabs/inibali-amp-pwa-runtime-cache-1420w.jpg">
<img alt="Runtime (dynamic) caching" title="Runtime (dynamic) caching" src="screen-grabs/inibali-amp-pwa-runtime-cache-800w.jpg">
</a>

  Runtime (dynamic) caching. Definitely a PWA.
