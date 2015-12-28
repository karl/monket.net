---
title: Patched Cucumber notifications in autotest-growl gem
author: karl
date: Mon, 15 Jun 2009 20:17:30 GMT
template: article.jade
---

Following on to my [previous post on Autotest, Cucumber, and Growl](/articles/autotest-cucumber-and-growl/), I have forked the autotest-growl repository, and applied my fix for Cucumber notifications.

You find my [patched version of autotest-growl on GitHub](http://github.com/karl/autotest-growl/tree/master).

You can switch to this version of autotest-growl by uninstalling any existing version, and then installing from my fork on GitHub:

```bash
sudo gem uninstall autotest-growl
sudo gem install karl-autotest-growl --source http://gems.github.com
```
