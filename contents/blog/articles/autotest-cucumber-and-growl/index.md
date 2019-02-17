---
title: Autotest, Cucumber, and Growl
author: karl
date: Mon, 15 Jun 2009 06:19:17 GMT
template: article.pug
---

[Autotest](http://ph7spot.com/articles/getting_started_with_autotest) is a great Ruby tool to speed up test driven development by automatically running your tests every time a file is saved.

[Cucumber](http://cukes.info/) is an awesome tool for doing behavioural driven development. It allows you to write plain text automated acceptance tests.

[Autotest and Cucumber work together seamlessly](http://wiki.github.com/aslakhellesoy/cucumber/autotest-integration), you just need to set the `AUTOFEATURE` environment variable to true:

```bash
$ AUTOFEATURE=true
```

[Growl](http://growl.info/) is an excellent notification system for OSX that allows applications to popup unobtrusive messages on the users desktop. ([Snarl](http://www.fullphat.net/index.php) is the equivalent for windows)

You can [add Growl support to Autotest (using the autotest-growl gem)](http://github.com/svoop/autotest-growl/tree/master) so that you get popup notifications of test results.

**But the current version of autotest-growl doesn't provide notifications for the result of Autotest Cucumber runs.**

## Cucumber Growl support in Autotest

So I've added support for notification of Autotest Cucumber results using growl. It's super simple at the moment as I'm still pretty new at Ruby.

You need to have Autotest (part of the ZenTest gem), Autotest-Growl, and Growl already installed.

Save the code below to the file `growl-cucumber.rb`.

#### growl-cucumber.rb

```ruby
require 'autotest'

module Autotest::Growl

  # Growl results of Cucumber
  Autotest.add_hook :ran_features do |autotest|

	gist = autotest.results.grep(/\d+\s+scenario.*\)/).join(" / ").strip()
	if gist == ''
	  growl @label + 'Cannot run features.', '', 'error'
	else
	  if gist =~ /[1-9]\d*\s+(failed)/
	    growl @label + 'Some features have failed.', gist, 'failed'
	  elsif gist =~ /pending/
	    growl @label + 'Some features are skipped.', gist, 'skipped'
	  else
	    growl @label + 'All features have passed.', gist, 'passed'
	  end
	end
    false
  end

end
```

Then update your .autotest configuration file to include the new growl-cucumber file:

#### .autotest

```ruby
# Add the growl and growl-cucumber requires to your .autotest config file
require 'autotest/growl'
require 'autotest/growl-cucumber'
```

* * *

## To Do

I need to see if this can be integrated with the existing autotest-growl gem.
