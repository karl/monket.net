---
title: New QUnit to JS Test Driver adapter
author: karl
date: Tue, 23 Jun 2009 07:56:28 GMT
template: article.pug
---

<div class="info">The code in this post is out of date. The latest code can always be found in the [JS Test Driver google code site](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter)</div>

In my [previous post on QUnit and JS Test Driver](/articles/qunit-and-js-test-driver/) I showed how to run your [qunit](http://docs.jquery.com/QUnit) tests with [JS Test Driver](http://code.google.com/p/js-test-driver/).

The technique used was to run the tests with qunit, and report either their success or failure to JS Test Driver. This works, but you miss out on the important feedback of exactly which assertions have failed, and why.

This problem has led me to taking a new approach to running qunit tests with JS Test Driver, where I don't use any of the existing qunit code, and instead just create an interface wrapper that converts qunit style tests and assertions directly into JS Test Driver tests and assertions.

This gives assertion level error reporting, making it much easier to write and debug tests. Essentially this adapter allows you to write native JS Test Driver tests, but using the less verbose qunit syntax.

The new approach also means that qunit lifecycles (setup and teardown) work.

## Installing the QUnit Adapter

First up download the [equiv.js](equiv.js) file, which is required for the qunit `same` assertion.

Then download the [QUnitAdapter.js](QUnitAdapter.js) file (or copy the code below).

#### [QUnitAdapter.js](QUnitAdapter.js)

```javascript
(function() {

    window.module = function(name, lifecycle) {
        QUnitTestCase = TestCase(name);

        if (lifecycle) {
            QUnitTestCase.prototype.setUp = lifecycle.setup;
            QUnitTestCase.prototype.tearDown = lifecycle.teardown;
        }
    };

    window.test = function(name, test) {
        QUnitTestCase.prototype['test ' + name] = test;
    };

    window.expect = function(count) {
        expectAsserts(count);
    };

    window.ok = function(actual, msg) {
        assertTrue(msg ? msg : '', actual);
    };

    window.equals = function(a, b, msg) {
        assertEquals(msg ? msg : '', b, a);
    };

    window.start = window.stop = function() {
        fail('start and stop methods are not available when using JS Test Driver.\n' +
            'Use jsUnit Clock object to deal with timeouts and intervals:\n' +
            'http://googletesting.blogspot.com/2007/03/javascript-simulating-time-in-jsunit.html.');
    };

    window.same = function(a, b, msg) {
        assertTrue(msg ? msg : '', window.equiv(b, a));
    };

    window.reset = function() {
    	fail('reset method is not available when using JS Test Driver');
    };

    window.isLocal = function() {
    	return false;
    };

    window.QUnit = {
    	equiv: window.equiv,
    	ok: window.ok
    };

})();
```

Save both these files to your project (for example `tests/qunit/`).

## Configuring JS Test Driver

To run your qunit tests in JS Test Driver you need to configure it to load the adapter before your qunit tests.

Update your `jsTestDriver.conf` to load the files:

```yaml
server: http://localhost:9876

load:
  # Add these lines to load the equiv function and adapter in order, before the tests
  # (assuming they are saved to tests/qunit/)
  - tests/qunit/equiv.js
  - tests/qunit/QUnitAdapter.js

  # This is where we load the qunit tests
  - tests/js/*.js

  # And this loads the source files we are testing
  - src/js/*.js
```

## Running JS Test Driver with qunit tests

Now we can run JS Test Driver and watch as it runs all our qunit tests!

The tests will run as individual JS Test Driver tests, with the format `_Module Name_._Test Name_`.

Example output:

```plain
[PASSED] Module 1.test Test 1
[PASSED] Module 1.test Test 2
[PASSED] Module 2.test Test 1
Total 3 tests (Passed: 3; Fails: 0; Errors: 0) (1.00 ms)
  Safari 530.18: Run 3 tests (Passed: 3; Fails: 0; Errors 0) (1.00 ms)
```

## Limitations

There are a few limitations on which qunit tests will successfully be converted.

The tests must run synchronously (which means no use of the qunit `stop` and `start` methods).

If you need to test timeouts, intervals, or other asynchronous sections of  code, consider [using the jsUnit Clock object to deal with timeouts and intervals.](http://googletesting.blogspot.com/2007/03/javascript-simulating-time-in-jsunit.html)

QUnit `DOM` support is not included. Consider avoiding interacting directly with the browser within your unit tests. But if you do need to, you'll need to create and remove the DOM objects yourself with each test, or the `setup` and `teardown` methods.
