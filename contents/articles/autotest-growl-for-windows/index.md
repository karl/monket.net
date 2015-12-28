---
title: Autotest Growl for Windows
author: karl
date: Fri, 10 Jul 2009 10:32:48 GMT
template: article.jade
---

In a previous blog post I detailed [how to get Autotest Growl notifications on Windows using Snarl](http://monket.net/blog/2009/06/autotest-growl-notifications-on-windows-using-snarl/). But, there now exists an [official Growl client for Windows](http://www.growlforwindows.com/gfw/).

So how about we update `autotest-growl` to support Windows (on top of it's existing support for OSX).

If you don't want to know all the gory details, you can just install my fork of the `autotest-growl` gem, that includes native Growl Windows support:

```bash
gem install karl-autotest-growl --source http://gems.github.com
```

Obviously, you'll need to have [Growl for Windows](http://www.growlforwindows.com/gfw/) installed as well!

## Updating Autotest Growl to support Windows

First up [download and install Growl for Windows](http://www.growlforwindows.com/gfw/) (if you haven't already).

Updating Autotest Growl turns out to be pretty simple. We need to download [growlnotify for Windows](http://www.growlforwindows.com/gfw/help/growlnotify.aspx), and add it to the `growl/` directory.

Then we can update the `autotest-growl` code to decide which `growlnotify` to use depending on the Operating System.

```ruby
  def self.is_windows?
    processor, platform, *rest = RUBY_PLATFORM.split("-")
    platform == 'mswin32'
  end

  ##
  # Display a message through Growl.
  def self.growl title, message, icon, priority=0, stick=""
    growl = File.join(GEM_PATH, 'growl', 'growlnotify')
    image = File.join(ENV['HOME'], '.autotest-growl', "#{icon}.png")
    image = File.join(GEM_PATH, 'img', "#{icon}.png") unless File.exists?(image)

    if is_windows?
      growl += '.com'
      cmd = "#{growl} #{message.inspect} /a:\"autotest\" /r:\"Autotest\" /n:\"Autotest\" /i:\"#{image}\" /p:#{priority} /t:\"#{title}\""
    else
      if @@remote_notification
        cmd = "#{growl} -H localhost -n autotest --image '#{image}' -p #{priority} -m #{message.inspect} '#{title}' #{stick}"
      else
        cmd = "#{growl} -n autotest --image '#{image}' -p #{priority} -m #{message.inspect} '#{title}' #{stick}"
      end
    end

  system cmd
  end
```

You'll notice that the command line flags are slightly different for the Windows version of `growlnotify`, the using the `/x:` format, rather than the OSX `-x ` format.

The Windows version also adds the flat `/r:"Autotest"` to ensure the Autotest application is registered the first time it is run.

There is no need to deal with the `@@remote_notification` settings, as Growl for Windows does not have the same problem with [intermittent notification loss](https://bugs.launchpad.net/growl/+bug/267767) that OSX does.

## Installing updated Autotest Growl gem

I have rolled all these changes into my fork of `autotest-growl`. To switch over to this fork, open a Windows command prompt and enter:

```bash
gem uninstall autotest-growl
gem install karl-autotest-growl --source http://gems.github.com
```

And then watch the notifications roll in!
