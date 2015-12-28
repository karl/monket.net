---
title: Javascript Lint with Autotest
author: karl
date: Mon, 15 Jun 2009 09:00:00 GMT
template: article.jade
---

As well as using [Autotest to run Cucumber scenarios](/articles/autotest-cucumber-and-growl/) I have also been looking into integrating lower level test into the Autotest cycle.

My first attempt at this is a small module to run [Javascript Lint](http://javascriptlint.com/) on all the javascript files within a project any time any file changes.

The module below hooks in to Autotest just before the tests are normally run. It runs javascript lint over all the `*.js` files in the project, outputs the results to the autotest results object and the standard output, and finally fires a new `ran_javascript_lint` hook

Errors and warnings found by Javascript Lint will also be notified through [Growl](http://growl.info/) (if Growl and [autotest-growl](http://github.com/svoop/autotest-growl/tree/master) are installed). If there are no errors or warnings than no Growl notification is shown. This keeps distracting popups to a minimum.

## Installing Autotest Javascript Lint

First up, [download Javascript Lint](http://javascriptlint.com/download.htm). Extract the `jsl` executable to `lib/autotest/` within your project.

Copy the code below to `lib/autotest/javascript-lint.rb` within your project (the same directory where you have the `jsl` execuatable).

#### javascript-lint.rb

```ruby
# Run Javascript Lint as part of autotest
# Supports Growl notifications if using autotest-growl
#
# Version 1.0

require 'autotest'

module Autotest::JavascriptLint
    @@js_dir = ''
    @@jsl_dir = File.dirname(__FILE__) + '/'
    @@config_file = ''

    def self.js_dir=(string)
        @@js_dir = string
    end

    def self.jsl_dir=(string)
        @@jsl_dir = string
    end

    def self.config_file=(string)
        @@config_file = string
    end

    Autotest.add_hook :run_command do |at|

        # run javascript lint
        results = `#{@@jsl_dir}jsl -conf "#{@@config_file}"  -process "#{@@js_dir}*.js" +recurse`
        puts results

        at.results = [] if at.results.nil?
        at.results.concat(results.split("\n"))

        at.hook :ran_javascript_lint
    end

end

module Autotest::Growl

    @@show_js_lint_success = false

    def self.show_js_lint_success=(bool)
        @@show_js_lint_success=bool
    end

    # Growl results of Javscript Lint
    Autotest.add_hook :ran_javascript_lint do |autotest|
        gist = autotest.results.grep(/\d+\s+error.*,\s+\d+\s+warning.*/).join(" / ").strip()

        if gist == ''
            growl @label + 'Cannot run javascript lint.', '', 'error'
        else
            if gist =~ /[1-9]\d*\s+(error)/
                growl @label + 'Lint: Some files have errors.', gist, 'failed'
            elsif gist =~ /[1-9]\d*\s+(warning)/
                growl @label + 'Lint: Some files have warnings.', gist, 'pending'
            elsif @@show_js_lint_success
                growl @label + 'Lint: All files are clean.', gist, 'passed'
            end
        end
        false
    end

end
```

Then add Autotest Javascript Lint to your `.autotest` configuration file within the base of your project.

```ruby
require 'lib/autotest/javascript-lint'
```

## To Do

This could be packaged as a gem for easy installation, and it could possibly be modified to only run over changed files.
