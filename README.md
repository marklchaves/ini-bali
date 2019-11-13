# ini bali : this is bali Progressive Web AMP (Story)

Iya, you read that right. an AMP Story running as a PWA. sick.

"Ini Bali" means "this is Bali". AMP means mobile first. AMP Story means Snapchat/IG style story. PWA means more control over browser caching and can run offline if needed.

---

[live version](https://inibali.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/60cb91f6-a638-4728-869a-796f7398f995/deploy-status)](https://app.netlify.com/sites/inibali/deploys)

---

[based on the Build a Progressive Web AMP code lab](https://codelabs.developers.google.com/codelabs/amp-pwa-workbox/#0)

---

## Give it a Try

1. Bring up the [ini bali Progressive Web App AMP story](https://inibali.netlify.com/)
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

Click on image for larger version, if available. Then, click the `Download` button to view the full size.

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

---

### Performance Benchmarks

Pretty _stoked_ with these initial results. This is out of the box with no performance tuning save standard image scaling and compression.

<em>Edit 13 November 2019: Now getting a 90 on mobile and 100 on desktop. This is after further scaling the four images for the collage page, yet adding one new story page. I'll take it!</em>

<a href="screen-grabs/inibali-amp-wa-pagespeed-mob-10nov2019.jpg">
<img alt="Initial Mobile PageSpeed" title="Initial Mobile PageSpeed" src="screen-grabs/inibali-amp-wa-pagespeed-mob-10nov2019.jpg">
</a>

  Initial Google PageSpeed Insights Mobile

---

<a href="screen-grabs/inibali-amp-wa-pagespeed-dt-10nov2019.jpg">
<img alt="Initial Desktop PageSpeed" title="Initial Desktop PageSpeed" src="screen-grabs/inibali-amp-wa-pagespeed-dt-10nov2019.jpg">
</a>

  Initial Google PageSpeed Insights Desktop
  
---

<a href="screen-grabs/inibali-amp-wa-pagespeed-mob-13nov2019.jpg">
<img alt="Improved Mobile PageSpeed" title="Improved Mobile PageSpeed" src="screen-grabs/inibali-amp-wa-pagespeed-mob-13nov2019.jpg">
</a>

  Google PageSpeed Insights Mobile After More Image Optimisation but Adding One New Page

---

<a href="screen-grabs/inibali-amp-wa-pagespeed-dt-13nov2019.jpg">
<img alt="Improved Desktop PageSpeed" title="Improved Desktop PageSpeed" src="screen-grabs/inibali-amp-wa-pagespeed-dt-13nov2019.jpg">
</a>

  Google PageSpeed Insights Desktop After More Image Optimisation but Adding One New Page
  
---

Want to support my work? [Shameless Plug to Help Our Millie](https://ko-fi.com/marklchaves)
