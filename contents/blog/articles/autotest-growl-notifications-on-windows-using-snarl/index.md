---
title: Autotest Growl notifications on Windows (using Snarl)
author: karl
date: Fri, 19 Jun 2009 11:31:18 GMT
template: article.jade
---

[Growl and Autotest work brilliantly together](/articles/simple-example-of-autotest-cucumber-and-growl/). Autotest runs all your tests in the background every time a file changes, giving you extremely fast feedback on your test driven development. And Growl notifications save you from needing to flip back to the Terminal to see the result of each test run, you get an unobtrusive popup in the corner of your screen showing the success or failure of the tests.

But what about those users working on the Windows platform?

[Snarl](http://www.fullphat.net/index.php) is a windows counterpart to Growl. Providing much of the same functionality.

And there is a Snarl Ruby gem allowing us to create Snarl notifications from Ruby.

So lets convert our Growl calls to Snarl calls, and get Autotest notifications under Windows.

## Installing Autotest, Snarl, and the Growl to Snarl converter

If you haven't already [download and install Ruby](http://www.ruby-lang.org/en/downloads/).

First up we need to [download and install Snarl](http://www.fullphat.net/index.php).

Then we need to install Autotest and the autotest-growl gem (that we are later going to override). Open a command prompt, and type the following (Autotest is part of the ZenTest gem):

```bash
gem install ZenTest
gem install ruby-snarl
gem install autotest-growl
```

Then save the code below to `lib/autotest/growl-to-snarl.rb` within your project. This code converts any Growl calls to equivalent Snarl calls.

#### growl-to-snarl.rb

```ruby
require 'snarl'
module Autotest::Growl

  # Display a message through Snarl.
  def self.growl title, message, icon, priority=0, stick=""
    image = File.join(ENV['HOME'], '.autotest-growl', "#{icon}.png")
    image = File.join(GEM_PATH, 'img', "#{icon}.png") unless File.exists?(image)

	Snarl.show_message(title, message.inspect, image)
  end

end
```

Next we need to update our `.autotest` configuration file to include the autotest-growl gem, and the Growl to Snarl converter. Add the following to your `.autotest` file in the project root directory.

```ruby
require 'autotest-growl'
require 'snarl'
require 'lib/autotest/growl-to-snarl'
```

## Running Autotest with Snarl support

First up ensure Snarl is running (check for the icon in the system tray).

Autotest will fail to run on Windows if a `HOME` environment variable doesn't exist, so we need to create one before we run (I've also noticed that the Ruby `gem` command will fail to run if the `HOME` evironment variable _does_ exist, which is frustrating!).

Open a command prompt, navigate to the project root directory. Then enter the following to set the `HOME` environment variable and run Autotest.

```bash
set HOME="C:\Documents and Settings\username"
autotest
```

The results of your test runs should now display as Snarl notifications.
