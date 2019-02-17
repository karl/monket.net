---
title: Detecting when a page is loaded from the browser cache
author: karl
date: Fri, 12 Feb 2010 13:55:50 GMT
template: article.pug
---

When a user presses the back button in their browser to return to a previous page, that page is usually loaded straight from the browser's cache, without any requests being made to the server. When that page shows information that could be out of date (such a an old list of products in your basket) this can cause problems.

So how about we knock up a little code that allows us to determine whether the page has been loaded from the server or the browsers cache. Then we can reload those parts of the page that may need updating (such as the basket).

We can do this by setting a cookie on every response from the server, and modifying that cookie using javascript. We can then use this cookie to know whether the page has been loaded from the server or the browser cache.

## Setting the cookie on every response from the server

We will use a `loadedFromBrowserCache` cookie to facilitate the cache detection. We will set it to `false` every time a page is loaded from the server.

You can use the `BrowserCacheIndicator` class below to manage the cookie.

### BrowserCacheIndicator.cs
```csharp
using System.Web;

namespace SevenDigital.Web.Com.Code {
	public class BrowserCacheIndicator {
		private const string CACHE_COOKIE = "loadedFromBrowserCache";

		// This works with the javascript on the site to determine whether
		// a page has been loaded from the browser cache

		// *Every time* a page is loaded from the server we need to set
		// the loadedFromBrowserCache cookie to false

		// This method should be called in all Master Pages
		public void ClearCacheCookie(HttpResponse response) {
			response.SetCookie(new HttpCookie(CACHE_COOKIE, "false"));
		}
	}
}
```

And then set the cookie in every Master page:

```csharp
namespace SevenDigital.Web.Com {
	public partial class ExampleMasterPage: BaseMasterPage {
		protected readonly BrowserCacheIndicator BrowserCacheIndicator = new BrowserCacheIndicator();

		protected void Page_Load(object sender, EventArgs e) {
			BrowserCacheIndicator.ClearCacheCookie(Response);
		}
	}
}
```

## Using the cookie to know whether the page was loaded from the browser cache

The `loadedFromBrowserCache` cookie will be reset set to `false` by the HTTP Response header every time the page is loaded from the server. But it will not be reset when the page is loaded from the cache. We can use this to our advantage by setting the `loadedFromBrowserCache` cookie to `true` in javascript.

Then we know that the browser was loaded from the cache if the cookie is true on page load (because it was not reset by the server).

We just need to make sure we check the cookie before we set it to `true`!

### browser-cache.js
```javascript
// Detect whether or not we are loading this page from the browser cache
// Set the value $.loadedFromBrowserCache, which other scripts can use
(function() {
	var CACHE_COOKIE = 'loadedFromBrowserCache';
	jQuery.loadedFromBrowserCache = getCookie(CACHE_COOKIE) == 'true';
	setCookie(CACHE_COOKIE, 'true');
})();
```

Now we have a `$.loadedFromBrowserCache` variable that let's us know whether the page was loaded from the browser cache.

Note, the above function can run immediately, it does not need to wait for the `jQuery` `ready` event, or the `window.onload` event as it does not modify the DOM.

## Using `$.loadedFromBrowserCache` to do something useful

Now we can do something useful with the knowledge a page was reloaded from the cache. How about reloading the users basket to ensure it is always up to date:

```javascript
// Reload the basket using ajax
// This is so that users still see the latest basket when using the back
// button in their browsers
$(function() {
	if ($.loadedFromBrowserCache) {
		refreshBasket();
	}
});
```

Enjoy!
