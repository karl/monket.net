---
title: Loris Autotest for Javascript
author: karl
date: Fri, 06 Nov 2009 14:26:54 GMT
template: article.pug
---

I've previously written a number of posts on javascript and autotest. Explaining how to integrate javascript lint, unit tests, and growl with the ruby [Autotest](http://ph7spot.com/articles/getting_started_with_autotest) project.

While this all worked, it felt a little clunky as Autotest doesn't natively support the idea of running multiple tasks one after the other. Rather than hack at the Autotest codebase, I thought I'd get some ruby experience by rolling my own autotest-style framework. Not great for reuse of code, but a great way for me to learn :)

## Loris

Loris will monitor your project and run [Javascript Lint](http://www.javascriptlint.com/) and [JS Test Driver](http://code.google.com/p/js-test-driver/) whenever a file changes, it will report the results to the command line and using [Growl](http://growl.info/). If required, Loris will automatically start the JS Test Driver server and register your default browser with it.

### Installing

Loris is hosted on [Gemcutter](http://gemcutter.org/), so you need to install their gem if you haven't already.

```bash
sudo gem update --system
sudo gem install gemcutter
gem tumble
```

Then to install Loris, just run the following:

```bash
sudo gem install loris
```

Loris has no command line options, and no configuration file (at the moment). It looks for configurations files to decide which tasks to run.

### Configuring Javascript Lint

To enable Javascript Lint, create a `jsl.conf` file in the folder where you run Loris. This should be a standard Javascript Lint config file. If you need here is an [example Javascript Lint config file](http://mike.kruckenberg.com/archives/2009/03/configuration-options-for-javascript-lint.html)

You just need to specify which files Javascipt Lint should process. For example:

```plain
### Files
# Specify which files to lint
# Use "+recurse" to enable recursion (disabled by default).
# To add a set of files, use "+process FileName", "+process Folder\Path\*.js",
# or "+process Folder\Path\*.htm".
#
+process src/js/*.js
+process tests/js/*.js
```

If no `jsl.conf` file is found, the Javascript Lint task is silently skipped.

### Configuring JS Test Driver

To enable JS Test Driver, create a `jsTestDriver.conf` file in the folder where you run Loris. This should be a standard [JS Test Driver config file](http://code.google.com/p/js-test-driver/wiki/ConfigurationFile).

This should specify which files JS Test Driver should process, and how it connects to the JS Test Driver server. For example:

```yaml
server: http://localhost:9876

load:
  - tests/qunit/equiv.js
  - tests/qunit/QUnitAdapter.js

  - src/js/*.js
  - tests/js/*.js
```

If no `jsTestDriver.conf` file is found, the JS Test Driver task is silently skipped.

To make it really simple to run JS Test Driver tests, if the server is set to run on `localhost`, and Loris doesn't detect one running, it will automatically start one, and register your default browser with it.

This makes it a one step process to get automated tests up and running.

### Running

To run, open a command line window, navigate to the root folder of your project, and run:

```bash
loris
```

Loris will run Javascript Lint, and JS Test Driver tasks (if it finds their configuration files), and will output the results on the command line.

#### Example output
```plain
Javascript Lint
success
All files are clean

0 error(s), 0 warning(s)
JS Test Driver
success
All tests pass
[PASSED] GreeterTest.testGreet
  [LOG] JsTestDriver Hello World!
[PASSED] GreeterTest.testGoodbye
[PASSED] GreeterTest.testSetName
[PASSED] GreeterTest.testSetNameAndNameParamter
[PASSED] Asserts.test OK true succeeds
[PASSED] Asserts.test Equals succeeds
  [LOG] about to call assertEquals
[PASSED] Asserts.test Same assert succeeds
[PASSED] Lifecycle.test Setup and Teardown are run, and can contain assertions
Total 8 tests (Passed: 8; Fails: 0; Errors: 0) (3.00 ms)
  Firefox 1.9.1.4 MacIntel: Run 8 tests (Passed: 8; Fails: 0; Errors 0) (3.00 ms)
```

Every time you make a change to a Javascript file, or a configuration file, Loris will automatically re-run Javascript Lint and JS Test Driver. So you can instant feedback on your changes.

Loris will clear the command line when re-running tasks. So the latest run is always at the top of you command line.

Loris will also report a summary of each task using [Growl](http://growl.info/) (if it is installed). This allows you to get quick feedback without needing to refer back to the command line on every change.

### Requirements

JS Test Driver is written in Java, so you will need to have Java installed to run it.

To get Growl notifications, you will need to install either [Growl for OSX](http://growl.info/) or [Growl for Windows](http://www.growlforwindows.com/). Growl for Windows requires the [.NET Framework 2.0+](http://www.microsoft.com/downloads/details.aspx?FamilyID=0856EACB-4362-4B0D-8EDD-AAB15C5E04F5&displaylang=en).

### Caveat

Loris is pretty limited at the moment, I just wired up the basics to get it running for a work project.

It doesn't have any configuration options at the moment, so you have to follow it's assumptions for now. I'm happy to add configuration options for any element as required.

Loris only comes with a few tasks (Javascript Lint, JS Test Driver, JSpec, and RSpec), but I hope to allow it have new tasks added via new gems (kind of similar to Autotest).

It comes packaged with a version of Javascript Lint, and JS Test Driver, and will use it's own versions. It only includes the OSX and Windows versions of Javascript Lint.

If you want to modify the code, just fork the [Loris github project](http://github.com/karl/loris)
