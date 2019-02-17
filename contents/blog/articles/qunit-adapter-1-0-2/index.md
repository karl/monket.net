---
title: QUnit Adapter 1.0.2
author: karl
date: Sun, 30 Aug 2009 20:14:51 GMT
template: article.pug
---

A new version of the [JS Test Driver QUnit Adapter](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter) is available.

Version 1.0.2 fixes a small bug where a module lifecycle object without Setup or Teardown methods would cause a test to error. For example:

```javascript
module('Lifecycle', {});

test('', function() {
	expect(1);
	ok(true, 'tests still run successfully even if Setup and Teardown are undefined');
});
```

Would give the error `Lifecycle.test  error (1.00 ms): Result of expression 'l.setUp' [undefined] is not a function.`.

This is now fixed so the test behaves as if no lifecycle was defined.

You can get the new [1.0.2 verison of the QUnit Adapter from Google Code](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter).
