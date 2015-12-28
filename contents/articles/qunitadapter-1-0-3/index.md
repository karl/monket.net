---
title: QUnitAdapter 1.0.3
author: karl
date: Tue, 10 Nov 2009 07:32:34 GMT
template: article.jade
---

Just a small update to the JS Test Driver [QUnitAdapter](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter). Version 1.0.3 has been released, and fixes a single bug:

**[Issue 64](http://code.google.com/p/js-test-driver/issues/detail?id=64): QUnit Adapter fails to run tests if you don't include a module**

You can now declare tests without a module, and they will run under the `Default Module`. In previous versions these tests would be silently ignored (whoops!).

You can always [download the latest version of QUnitAdapter from Google Code](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter).
