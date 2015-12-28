---
title: QUnit to JSpec Adapter
author: karl
date: Thu, 03 Sep 2009 08:07:16 GMT
template: article.jade
---

[JSpec][1] is a Javascript BDD framework with a lot of great things going for it: It can run without a browser (great for continuous integration servers), it
has a Ruby style custom syntax which makes tests easier to write and read, and
it uses a BDD style describe/should syntax.

 [1]: http://visionmedia.github.com/jspec/

It’s a very tempting framework to use, but I already have a large collection
of tests using qunit. I don’t want to use two frameworks for one project, and I
don’t want to rewrite 300+ tests, so what to do?

How about a QUnit to JSpec Adapter, in the vein of my
[QUnit to JS Test Driver Adapter][2]. Just load the adapter into JSpec as a
normal javascript file, and you can now`exec()` qunit test files in JSpec.

 [2]: http://monket.net/blog/2009/06/new-qunit-to-js-test-driver-adapter/

## Downloading the QUnit to JSpec Adapter

First up [download the QUnit to JSpec Adapter][3], or copy the code below, and
save it somewhere in your project (e.g. a `lib` folder).

 [3]: http://monket.net/blog/wp-content/uploads/2009/09/QUnitToJSpecAdapter.js

#### [QUnitToJSpecAdapter.js][3]

```javascript
/*
QUnitToJSpecAdapter
Version: 1.0.0

Run qunit tests using JSspec

This provides almost the same api as qunit.

Tests must run sychronously, which means no use of stop and start methods.
You can use the JSpec mock timers to deal with timeouts, intervals, etc

The qunit #main DOM element is not included. If you need to do any DOM manipulation
you need to set it up and tear it down in each test.

*/
(function() {

    JSpec.addMatchers({
        be_ok : '!!actual'
    });

    JSpec.context = JSpec.defaultContext;
    JSpec.context.QUnitAdapter = {
        modules: []
    };

    module = function(name, lifecycle) {

        JSpec.context.QUnitAdapter.modules.push({
            name: name,
            tests: [],
            setup:    (lifecycle && lifecycle.setup)    ? lifecycle.setup    : function() {},
            teardown: (lifecycle && lifecycle.teardown) ? lifecycle.teardown : function() {}
        });

        JSpec.describe(name, function() {

            var length = QUnitAdapter.modules[0].tests.length;
            for (var i = 0; i < length; i++) {
                it(QUnitAdapter.modules[0].tests[i].name, function() {
                    var adapter = {
                        expectedAsserts: 0,
                        calledAsserts: 0,

                        expect: function(count) {
                            adapter.expectedAsserts = count;
                        },

                        ok: function(actual, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(actual).to(JSpec.matchers.be_ok);
                        },

                        equals: function(a, b, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(a).to(JSpec.matchers.be, b);
                        },

                        start: function() {
                            throw 'start and stop methods are not available when using JSpec.\n' +
                                'Use the JSpec timer to deal with timeouts and intervals:\n' +
                                'http://github.com/visionmedia/jspec/tree/master';
                        },

                        stop: function() {
                            throw 'start and stop methods are not available when using JSpec.\n' +
                                'Use the JSpec timer to deal with timeouts and intervals:\n' +
                                'http://github.com/visionmedia/jspec/tree/master';
                        },

                        same: function(a, b, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(a).to(JSpec.matchers.eql, b);
                        },

                        reset: function() {
                            throw 'reset method is not available when using JSpec';
                        },

                        isLocal: function() {
                            return false;
                        }
                    };

                    eval('with(adapter) {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].setup) +
                        'try {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].tests[0].testCallback) +
                        '} catch(ex) { throw(ex); } finally {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].teardown) +
                        '} }');

                    if (adapter.expectedAsserts > 0) {
                        JSpec.expect(adapter.calledAsserts).to(JSpec.matchers.equal, adapter.expectedAsserts);
                    }
                });
            }

            after_each(function() {
                QUnitAdapter.modules[0].tests.shift();
            });

            after(function() {
                QUnitAdapter.modules.shift();
            });

        });

    };

    test = function(name, testCallback) {
        JSpec.context.QUnitAdapter.modules[JSpec.context.QUnitAdapter.modules.length - 1].tests.push({
            name: name,
            testCallback: testCallback
        });
    };

})();
```

## Having some QUnit tests

First up you need some qunit tests. Having the qunit test files in the `spec`
directory helps simplify loading them.

As an example you can use the following:

#### qunit-tests.js

```javascript
module('Examples');

test('True is ok', function() {
  expect(1);
  ok(true);
});

module('Examples with lifecycle', {
  setup: function() {
    started = 'yes';
  },
  teardown: function() {
    ok(started);
    started = null;
  }
});

test('Test has started', function() {
  expect(2);
  equals(started, 'yes');
});
```

## Configuring QUnit Support

Then to enable QUnit tests to be run in JSpec, you must have JSpec load the
adapater as a normal javascript file, and`exec()` the QUnit test file as you
would a JSpec spec file.

For JSpec rhino support your `spec.rhino.js` file would look like:

#### spec.rhino.js

```javascript
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.10.0/lib/jspec.js')
load('lib/QUnitAdapter.js')

JSpec
.exec('spec/qunit-tests.js')
.run({ formatter : JSpec.formatters.Terminal })
.report()
```

Notice how the QUnit test file is exec’d exactly as you would a normal spec
file. You can run specs and Qunit tests along side each other without any
interference.

And for running the tests within a browser your `spec.dom.html` file would look
like:

#### spec.dom.html

```html
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.2.1/lib/jspec.css" />
        <script src="/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.2.1/lib/jspec.js"></script>
        <script src="../lib/QUnitAdapter.js"></script>
        <script>
            function runSuites() {
                JSpec
                .exec('qunit-tests.js')
                .run()
                .report()
            }
        </script>
    </head>
    <body class="jspec" onLoad="runSuites();">
        <div id="jspec-top">

## JSpec _<script>document.write(JSpec.version)</script>_
</div>
        <div id="jspec"></div>
        <div id="jspec-bottom"></div>
    </body>
</html>
```

## Running the tests

To run the tests just launch JSpec as normal. My prefered method is to run the
tests using rhino, to do this navigate to your project root directory in a
terminal window and run:

```bash
jspec run --rhino
```

And you should now see your QUnit tests running in JSpec:

```plain
 Passes: 5 Failures: 0

 Examples
  True is ok..

 Examples with lifecycle
  Test has started...
```

## Limitations

This adapter has many of the same limitations and my
[QUnit to JS Test Driver adapter][1].

 [1]: http://monket.net/blog/2009/06/new-qunit-to-js-test-driver-adapter/

The tests must run synchronously (which means no use of the qunit `stop` and
`start` methods).

If you need to test timeouts, intervals, or other asynchronous sections of code
, you can use the[mock timers that come with JSpec][2].

 [2]: http://github.com/visionmedia/js-mock-timers/tree/master

QUnit DOM support is not included. Consider avoiding interacting directly with
the browser within your unit tests. But if you do need to, you’ll need to create
and remove the DOM objects yourself with each test, or the setup and teardown
methods.

And lastly, tests are broken out of any closures before they run. This means
they lose access to any closure variables. For example, the follow test would
work in QUnit, but not in JSpec. When running in JSpec access to the`setup`
variable is lost.

```javascript
(function(){
  var setup = function() {
    // do setup...
  };

  test('name', function() {
    setup();
  });
})();
```
