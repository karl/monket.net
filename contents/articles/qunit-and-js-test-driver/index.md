---
title: QUnit and JS Test Driver
author: karl
date: Sun, 21 Jun 2009 17:18:04 GMT
template: article.jade
---

<div class="info">This post has obsoleted been the [new QUnit Adapter](http://code.google.com/p/js-test-driver/wiki/QUnitAdapter) I created, check it out!</div>

I was very impressed by the new Google [JS Test Driver](http://code.google.com/p/js-test-driver/) project, which provides a blisteringly fast, and easily automated way of running your Javascript unit tests. See this [introduction to JS Test Driver by Miško Hevery](http://misko.hevery.com/2009/05/22/yet-another-javascript-testing-framework/) for a great overview.

I previously described how to [run JS Test Driver automatically with Autotest](/articles/autotest-and-js-test-driver/).

But I have an existing project that uses the jQuery testing framework [qunit](http://docs.jquery.com/QUnit) for testing. I didn't really fancy rewriting 300+ tests just so I could use the JS Test Driver framework.

So I wrote a converter that automatically converts qunit modules and tests into JS Test Driver TestCases and test methods.

## Download Converter and Patched Testrunner

In order to convert from qunit tests I've had to add a few extra hooks into the qunit `testrunner.js` file.

Either [download the patched testrunner.js](http://monket.net/blog/wp-content/uploads/2009/06/testrunner.js) file, or just add the 3 lines below:

```javascript
    QUnit: {
        // Add the following 3 lines
        runTest: runTest,
        config: config,
        validTest: validTest,

        // This is existing code
        equiv: equiv,
        ok: ok,
        done: function(failures, total){},
        log: function(result, message){}
    },
```

Next [download QUnitToTestCases.js](http://monket.net/blog/wp-content/uploads/2009/06/QUnitToTestCases.js) and save it to the same folder as `testrunner.js`. This is the file which converts the qunit tests into TestCases that JS Test Driver understands.

It works by overriding the qunit `test()` function, and rather than adding the test to qunit, it creates a test method on a TestCase object which, when called by JS Test Driver adds the test to qunit and runs it.

## Configuring JS Test Driver

Once you have the patched `testrunner.js` and `QUnitToTestCases.js`, you just need to let JS Test Driver know to load them before your qunit tests. They need to be loaded in order, with  `testrunner.js` first, followed by `QUnitTiTestCases.js`, as the converter modifies some of the testrunner methods.

Update your `jsTestDriver.conf` to load the files:

```yaml
server: http://localhost:9876

load:
  # Add these lines to load the testrunner and converter in order, before the tests
  # (assuming the files are saved to tests/qunit/)
  - tests/qunit/testrunner.js
  - tests/qunit/QUnitToTestCases.js

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

Module lifecycles are ignored at the moment, which means `setup` and `teardown` functions are not called.
