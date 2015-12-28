---
title: Small Update to Loris (0.1.3)
author: karl
date: Mon, 12 Apr 2010 13:11:21 GMT
template: article.jade
---

A few months ago [I wrote about Loris](/articles/loris-autotest-for-javascript/), a small tool that will automatically run your javascript tests whenever a file changes.

I've just released a new version of the [Loris gem](http://rubygems.org/gems/loris) with a couple of minor fixes:

* The dependency on `win32-process` has now been removed from the gem. This means the gem now installs correctly on OSX. Windows users will manually need to install the `win32-process` gem.

* The dependancy on `visionmedia-bind` has been updated to just `bind`, reflecting the gems new name on RubyGems.

* The JS Test Driver server is now reset between all tests. This stops it getting into a situation where it failed to pick up changes to files.

Because [RubyGems](http://rubygems.org/) is now the default gem host, this install process is a little simpler.

```bash
sudo gem install loris
```

or on Windows

```bash
gem install loris
gem install win32-process
```
