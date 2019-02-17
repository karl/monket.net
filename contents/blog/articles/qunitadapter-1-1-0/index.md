---
title: QUnitAdapter 1.1.0
author: karl
date: Fri, 09 Apr 2010 12:22:00 GMT
template: article.pug
---

I've updated the JS Test Driver [QUnitAdapter](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter) to improve compatibility with QUnit.

Variables set on the `this` object within are now available within setup, teardown, and the tests themselves.

```javascript
module('Lifecycle', {
  setup: function() {
    this.mockString = "some string";
  },
  teardown: function() {
    equals(this.mockString, "some string");
  }
});

test("Things assigned to this in setup are available in test", function() {
  equals(this.mockString, "some string");
});
```

The `test` function now supports the optional second parameter of the expected number of assertions.

```javascript
// declare that this test has expects 1 assertion
test('Test with expected defined as 2nd param', 1, function(){
  ok(true);
});
```

My thanks go to `anotherhero` for providing the [patch](http://code.google.com/p/js-test-driver/issues/detail?id=116) to fix both these issues.

You can always [download the latest version of QUnitAdapter from Google Code](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter).
