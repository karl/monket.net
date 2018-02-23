---
title: Update to QUnit Adapter
author: karl
date: Thu, 02 Jul 2009 06:32:25 GMT
template: article.jade
---

I've made a small update to the [QUnit Adapter for JS Test Driver](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter).

This fixes a bug where the `ok()` assertion was much stricter than the qunit equivalent. It was only succeeding when passed a boolean `true` value.

Now it behaves the same as the qunit version, and succeeds with all values other than `0`, `false`, or `null`.

You can get the new [1.0.1 verison of the QUnit Adapter from Google Code](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter).
