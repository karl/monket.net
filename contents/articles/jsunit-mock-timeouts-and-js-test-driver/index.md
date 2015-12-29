---
title: jsUnit Mock Timeouts and JS Test Driver
author: karl
date: Wed, 01 Jul 2009 16:45:30 GMT
template: article.jade
---

As part of my experimenting with [JS Test Driver](http://code.google.com/p/js-test-driver/), I have been porting over a suite of about 300 existing tests.

Some of these tests deal with time based logic, such as delayed callbacks or time limited user interaction. Currently these tests are run in a HTML page using [qunit](http://docs.jquery.com/QUnit).

To deal with the time based logic I use the jsUnit's Mock Timeout. See [Simulating Time in jsUnit Tests on the Google Testing Blog](http://googletesting.blogspot.com/2007/03/javascript-simulating-time-in-jsunit.html).

jsUnit's Mock Timeout overrides the built in `setTimeout`, `clearTimeout`, `setInterval`, and `clearInterval` methods, and provides a `Clock` object that allows you to control the passage of time.

## Problem

This works fine in qunit, but it fails catastrophically in JS Test Driver. This is because JS Test Driver uses the `setTimeout` and `setInterval` methods to control it's own behaviour. Once these have been overridden with the mock versions JS Test Driver no longer works.

As a temporary fix for this I have created a patched version of JS Test Driver, which creates it's own copies of the original `setTimeout`, `clearTimeout`, `setInterval`, and `clearInterval` methods, before loading any code. This ensures it works well with the jsUnit Mock Timeout.

## Patched JS Test Driver

[Download a patched JsTestDriver with no-confilict timeouts.](JsTestDriver-1.0b-own-timeouts.jar)

Just use this jar in place of the original `JsTestDriver-1.0b.jar`, and you can include `jsUnitMockTimeout.js` in your tests without breaking JS Test Driver!

You may also want to [download jsUnitMockTimeout.js](jsUnitMockTimeout.js) (to save you finding it within the jsUnit source).

## The Future

I see this patched JS Test Driver as very much a temporary stepping stone, while the correct solution is worked out. Beware of relying on it too heavily!

<div class="info" markdown="1">
**Update**: [This solution has been integrated into JS Test Driver](http://groups.google.com/group/js-test-driver/browse_thread/thread/1393946af440ed90/c532267cd6c90710#c532267cd6c90710), and will be available in the next release.
</div>
