---
title: Ruby Growl Notifications in Windows
author: karl
date: Fri, 17 Jul 2009 14:24:57 GMT
template: article.pug
---

I previously posted an update that enables [Growl notifications for Autotest in Windows](/articles/autotest-growl-for-windows/).

Which is nice, but what about other Ruby programs, they might want to send Growl notifications too. To this end Vision Media have produced a [Ruby Growl gem](http://github.com/visionmedia/growl/tree/master) which makes it easy for any Ruby program to send Growl notifications.

But the visionmedia-growl gem only works on OSX.

## Now With Added Windows Support

So I had a go at adding Windows support. The short version is that it works, but the code is seriously ugly and not well tested (you have been warned!).

Check out [my visionmedia-growl fork](http://github.com/karl/growl/tree/master). Or just install the gem:

```bash
sudo gem install karl-growl --source http://gems.github.com
```

## Packaging `growlnotify`

First up I decided to package both the OSX and Windows versions of `growlnotify` with the gem.

This is a departure from the existing gem, which requires that you have installed `growlnotify` yourself. I wanted to be able to include this gem in new projects without having to bother users to download extra dependencies.

## Choose the Right `growlnotify`

I decide which growlnotify to use by checking which platform we are running on:

```ruby
  def self.is_windows?
    processor, platform, *rest = RUBY_PLATFORM.split("-")
    platform == 'mswin32'
  end

  ##
  # Execute +args+ against the binary.

  def self.exec *args
    bin = PACKAGED_BIN
    bin += '.com' if is_windows?

    Kernel.system bin, *args
  end
```

## Different Switches on Different Operating Systems

The biggest headache with adding Windows support was adding the ability to generate Windows style command line arguments.

Example OSX command line:
```bash
growlnotify --message llamas --title Llama! --image images/llama.png
```

Example Windows command line:
```bash
growlnotify.com llamas /t:Llama! /i:images/llama.png
```

Note that in the Windows command line, switches are specified with `/_x_:` prefix, and no space. The names of the switches don't correspont exactly with the OSX ones.

Also, with the Windows version of `growlnotify` you don't give an switch for the message body, just include it as the first argument.

## Adding Support for Windows Style Switches

The first part of adding this support was to map the OSX switches to their Windows counterparts (where they existed).

```ruby
    switch :title,      :t
    switch :sticky,     :s
    switch :priority,   :p
    switch :host,       :host
    switch :password,   :pass
    switch :port,       :port

    switch :name,       :a
    switch :message,    :EMPTY
    switch :image,      :i
    switch :identifier, :id

    switch :iconpath,   nil
    switch :appIcon,    nil
    switch :icon,       nil

    switch :udp,        nil
    switch :auth,       :hash
    switch :crypt,      nil
```

As you can see, not all OSX switches are available in the Windows version of `growlnotify`. I dealt with this at the moment, by just stripping out any switches that won't work in Windows.

Finally I altered (hacked?) the Growl `run` method, to produce parameter strings for either OSX or Windows.

```ruby
    def run
      raise Error, 'message required' unless message
      self.class.switches.each do |name, win_name|
        if send(:"#{name}?")
          value = send(name).to_s if send(name) && !(TrueClass === send(name))
          if is_windows?
            next if win_name.nil?

            switch = (win_name == :EMPTY) ? "" : "/#{win_name}:"
            args << switch + value
          else
            args << "--#{name}"
            args << value
          end
        end
      end
      Growl.exec *args
    end
```

The main points of interest here are the The windows switches don't have any space between the switch name and the value. So instead they are concatenated together into a single string.

Finally we deal with the special case where using the Windows version of `growlnotify` we need to add the message parameter without a switch, so we use the special token `:EMPTY` to deal with this.

## The Result

The results of this is a [Ruby gem that supports Growl notifications in Windows](http://github.com/karl/growl/tree/master). The gem can be installed with the following commands:

```bash
sudo gem install karl-growl --source http://gems.github.com
```

And used in your Ruby program as follows:

```ruby
Growl.notify {
    self.message = 'Hello World'
    self.image = File.join 'path', 'to', 'image.png'
  }
```

For more usage examples see the [karl-growl site](http://github.com/karl/growl/tree/master).

## Known Issues

There are a few known issues. The biggest of which no support for normalised icons.

To support OSX and Windows always give a path to an image, e.g.

```ruby
  :image => 'path/to/image.png'
```

There are a number of switches that only work in OSX, and are ignored in Windows. Unsupported switches are:

```ruby
  :iconpath
  :appIcon
  :icon
  :udp
  :crypt
```

The gem has only received the most cursory of testing, so there may be a whole host of other issues, be warned!

## The Future

I'm treating the current version of this gem, as a design spike, a proof of concept that shows we can have cross Operating System support. The code is a real mess, and has no unit tests, but I'm releasing it here to follow the ['better now beats best later'](http://anarchycreek.com/2009/07/11/better-now-beats-best-later/) rule.

I hope to refactor the code into something more production worthy when I get a chance.
