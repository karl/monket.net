---
title: Simple example of Autotest, Cucumber, and Growl
author: karl
date: Wed, 17 Jun 2009 15:47:09 GMT
template: article.pug
---

As an example of getting Autotest, Cucumber, and Growl up and running I've created a super simple test project. You can [download the example project](Autotest-Cucumber.zip), or just create it from the code on this post.

## Install Ruby, Growl, and Gems

First up we need to ensure that we have all our dependancies installed.

If you haven't already, [download and install Ruby](http://www.ruby-lang.org/en/downloads/).

Then we need to install the Autotest, Cucumber, and Growl Ruby gems. We can do this using the `gem` command that comes packaged with Ruby.

```bash
# Autotest test is part of the ZenTest gem
sudo gem install ZenTest
sudo gem install cucumber
# Use my modified autotest-growl gem (until the changes are merged into the official gem)
sudo gem install karl-autotest-growl --source http://gems.github.com
```

Next we need to ensure that the Growl application itself is installed. If not [download and install Growl](http://growl.info/).

## Create Project

Now we are ready to create our project. The either [download the example project](Autotest-Cucumber.zip) or create the file heirarchy below:

*   [dir] Autotest-Cucumber

    *   [file] .autotest
    *   [dir] features

            *   [file] test.feature

Copy the code below into the `.autotest` file:

#### .autotest

```ruby
require 'autotest/growl'
```

And the copy the following into the `test.feature` file:

#### test.feature

```cucumber
Feature:

    Scenario:
        Given I save 1
        Then I have 1
```

## Set Environment

Lastly we need to set the AUTOFEATURE environment variable to true, so that [autotest will run the Cucumber tests automatically](http://wiki.github.com/aslakhellesoy/cucumber/autotest-integration):

```bash
AUTOFEATURE=true
```

## Run Autotest!

Finally we can run autotest, and watch as it picks up the Cucumber tests, runs them, and notifies us via Growl. Open terminal and navigate to the project directory. Then run autotest:

```bash
autotest
```

Autotest will initiate a Cucumber run. Cucumber will pick up the `test.feature` file (because it looks for a `features` folder by default). The Cucumber run will show that you have 1 undefined scenario (and be kind enough to give you the code for your undefined steps). And finally Growl will display a notification that you have 1 undefined scenario, yay!

```plain
c:/ruby/bin/ruby c:/ruby/lib/ruby/gems/1.8/gems/aslakhellesoy-cucumber-0.3.11.3/bin/cucumber --format progress --format rerun --out C:/Temp/autotest-cucumber.17824.1 features
UU

1 scenario (1 undefined)
2 steps (2 undefined)
0m0.000s

You can implement step definitions for undefined steps with these snippets:

Given /^I save 1$/ do
  pending
end

Then /^I have 1$/ do
  pending
end
```
