---
title: Screenshots of Failing Cucumber Scenarios
author: karl
date: Mon, 14 Sep 2009 12:20:30 GMT
template: article.jade
---

At 7digital we use [Cucumber](http://cukes.info/) and [Watir](http://wtr.rubyforge.org/) for running acceptance tests on some of our websites.

These tests can help greatly in spotting problems with configuration, databases, load balancing, etc that unit testing misses.

But because the tests exercise the whole system, from the browser all the way through the the database, they can tend be flakier than unit tests. Then can fail one minute and work the next, which can make debugging them a nightmare.

So, to make the task of spotting the cause of failing acceptance tests easier, how about we set up Cucumber to take a screenshot of the desktop (and therefore browser) any time a scenario fails.

## Install Screenshot Software

The first thing we need to do is install something that can take screenshots. The simplest solution I found is a tiny little windows app called [SnapIt](http://90kts.com/blog/2008/capturing-screenshots-in-watir/). It takes a single screenshot of the primary screen and saves it to a location of your choice. No more, no less.

* [Download SnapIt](http://90kts.com/blog/wp-content/uploads/2008/06/snapit.exe) and save it a known location (e.g. `C:\Tools\SnapIt.exe`)

## Tell Cucumber to Take a Screenshot When a Scenario Fails

Now we need to tell Cucumber to take a screenshot. To do so we'll add a function to the Cucumber `World` that will take a screenshot if needed, and run this in the `After` scenario hook. To do this modify your `features/support/env.rb` file.

#### env.rb
```ruby
class DefaultWorld

  # Screenshot directory, relative to this env.rb file
  DEFAULT_SCREENSHOT_PATH = File.expand_path(File.dirname(__FILE__) + '/../../../output/cucumber/screenshots/')

  # Absolute location of SnapIt
  SNAPIT_PATH = 'C:\\Tools\\SnapIt.exe'

  def take_screenshot_if_failed(scenario)
    if (scenario.status != :passed)
      scenario_name = scenario.to_sexp[3].gsub /[^\w\-]/, ' '
      time = Time.now.strftime("%Y-%m-%d %H%M")
      screenshot_path = DefaultWorld::DEFAULT_SCREENSHOT_PATH + '/' +  time + ' - ' + scenario_name + '.png'
      cmd = DefaultWorld::SNAPIT_PATH + ' "' + screenshot_path + '"'
      %x{#{cmd}}
    end    
  end

  # [...] Other DefaultWorld code here if needed

end

World do
  DefaultWorld.new
end

After do |scenario|
  take_screenshot_if_failed(scenario)

  # [...] Other After hook code here if needed  

end
```

Just modify the constants in the above code to point to the locations of SnapIt and a directory to save the screenshots too.

## What the Code Does

The code will only take a screenshot if the scenario fails to pass.

It then extracts the name of the scenario, and converts it to a filename friendly string (e.g. `Monkey's should eat "things"` => `Monkey s should eat things`). It then prepends the current date and time, and uses this string as the filename for the screenshot.

This allows you to easily find screenshots for a specific scenario or time.

## Run a Failing Test and Check Out the Screenshot

Now you can run Cucumber as normal, watch a test fail, and you should see a screenshot appear in the directory you specified. And hopefully it will help you work out what went wrong, enjoy!

If the screenshot fails to appear, it could be because of an error in the ruby code. But Cucumber seems to hide any execptions within the After hook, so you may need to add `puts` statements to work out what is going wrong.
