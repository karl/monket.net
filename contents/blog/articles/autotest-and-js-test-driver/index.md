---
title: Autotest and JS Test Driver
author: karl
date: Fri, 19 Jun 2009 10:51:26 GMT
template: article.jade
---

Google recently released a new Javascript testing framework, [JS Test Driver](http://code.google.com/p/js-test-driver/). It provides incredibly fast execution for Javascript unit tests, and can be run from the command line without the need for manual control of browsers. Check out this [introduction to JS Test Driver by Miško Hevery](http://misko.hevery.com/2009/05/22/yet-another-javascript-testing-framework/).

Fast test execution and the ability to be run from the command line make it a perfect fit to integrate into the Autotest test cycle. So I have.

The module below hooks into Autotest just before the normal tests are run. It runs JS Test Driver over all the tests in the project, outputs the results, and finally fires off a `:ran_js_test_driver` hook.

Errors and failed tests will automatically be notified through [Growl](http://growl.info/) (if Growl and [autotest-growl](http://github.com/svoop/autotest-growl/tree/master) are installed). By default successful tests runs are not notified through Growl, in order to keep distracting popups to a minimum.

## Installing Autotest JS Test Driver

First you need to [download a copy of JS Test Driver](http://code.google.com/p/js-test-driver/downloads/list).

Save the JS Test Driver jar file to the `lib/` directory within your project.

Then copy the code below to `lib/autotest/js-test-driver.rb`

#### js-test-driver.rb

```ruby
# Run JS Test Driver as part of autotest
# Supports Growl notifications if using autotest-growl

require 'autotest'

module Autotest::JsTestDriver

    @@jar = File.dirname(__FILE__) + '/JsTestDriver-1.0b.jar'
    @@config_file = 'jsTestDriver.conf'

    def self.jar=(string)
        @@jar = string
    end

    def self.config_file=(string)
        @@config_file = string
    end

    def self.show_success=(bool)
        @@show_success=bool
    end

    Autotest.add_hook :run_command do |at|
        # run js test driver
        results = 'JS Test Driver:'
        results += `java -jar "#{@@jar}" --config "#{@@config_file}" --tests all --verbose`
        puts results

        at.results = [] if at.results.nil?
        at.results.concat(results.split("\n"))

        at.hook :ran_js_test_driver

    end

end

module Autotest::Growl

    @@show_js_test_success = false

    def self.show_js_test_success=(bool)
        @@show_js_test_success=bool
    end

  # Growl results of JS Test Driver
  Autotest.add_hook :ran_js_test_driver do |autotest|

    gist = autotest.results.grep( /Total\s+\d+\s+tests/ ).join(" / ").strip()

    if gist == ''
      growl @label + 'Cannot run JS Test Driver.', gist, 'error'
    else
      if gist =~ /Errors:\s+[1-9]\d*/
        growl @label + 'Error running some JS tests.', gist, 'failed'
      elsif gist =~ /Fails:\s+[1-9]\d*/
        growl @label + 'JS Test: Some tests failed.', gist, 'failed'
      elsif @@show_js_test_success
        growl @label + 'JS Test: All files are clean.', gist, 'passed'
      end
    end
    false
  end

end
```

## Configuring Autotest and JS Test Driver

JS Test Driver uses a configuration file to connect with the JS Test Driver server, and to decide which javscript files to load.

Create a `jsTestDriver.conf` file in the project root directory as follows.

```yaml
server: http://localhost:9876

load:
  - src/js/*.js
  - tests/js/*.js
```

This assumes that you have our javascript source files will be in the `src/js/` directory, and our javascript test files will be in the `src/js/` directory. We will create a test file, and associated code later.

The `server:` lets JS Test Driver know we will be connecting to a server on our local machine, on port 9876\. We'll get this server running later.

Next we need to configure Autotest to run JS Test Driver, by requiring the module and specifying the location of the JS Test Driver jar.

```ruby
# Require the JS Test Driver module
require 'lib/autotest/js-test-driver'

# Set the location of the JS Test Driver jar
Autotest::JsTestDriver::jar = './lib/jsTestDriver-1.0b.jar'
```

You can also configure the location of the JS Test Driver config file, and whether or not to show successful test runs.

```ruby
# Uncomment this if you have autotest-growl, and Growl installed
# And want to have notifications of JS Test Driver runs
# require 'autotest/growl'

# Uncomment this to change the location of the JS Test Driver config file
# By default we look for a jsTestDriver.conf file in the directory autotest is run from
# Autotest::JsTestDriver::config_file = './jsTestDriver.conf'

# Uncomment this to show successful test runs
# Autotest::Growl::show_js_test_success = true
```

Now that all the installation and configuration is done, let get everything running.

## Running Autotest with JS Test Driver

First up we need to get our JS Test Driver server up and running. Open a Terminal, and navigate to the directory containing the JS Test Driver jar. Run the following to start a server:

```bash
java -jar JsTestDriver-1.0b.jar --port 9876
```

Now we need to capture a browser to use for testing. Open a browser and automatically capture it for use with JS Test Driver by going to the following URL:

```
http://localhost:9876/capture
```

Now we can run autotest, and watch as it runs JS Test Driver and reports the results to us on every file change:

```bash
autotest
```

JS Test Driver will probably report that no tests were run, as we haven't written any tests yet. Tests are written using the [`TestCase`](http://code.google.com/p/js-test-driver/wiki/TestCase) object, which exposes JUnit style functionality.

## Writing Some Tests

Here is an example test file, and the production code it tests:

#### GreeterTest.js

```javascript
GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World.", greeter.greet("World"));
};
```

#### Greeter.js

```javascript
myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + "!";
};
```

If you copy these to your `tests/js/` and `src/js/` directories respectively, Autotest should pick up the new files, run the tests and notify you that there is an error. See if you can spot it :P

## To Do

This would be nice packaged up as a gem. It would also be nice if failed Javascript tests could stop further tests being run.
