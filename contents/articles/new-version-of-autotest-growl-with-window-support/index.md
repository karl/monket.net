---
title: New version of Autotest Growl (with Window support)
author: karl
date: Fri, 24 Jul 2009 09:16:35 GMT
template: article.jade
---

In a previous post I detailed changes I made to [add Growl for Windows support to Autotest Growl](/articles/autotest-growl-for-windows/).

These changes have now been integrated back into the `autotest-growl` gem. Along with some major improvements to the analysis of test results, and the details in the notifications. Thanks to [Svoop](http://github.com/svoop), the creator of `autotest-growl`.

This gem isn't yet available on [Rubyforge](http://rubyforge.org/), but you can grab a copy from my fork on GitHub until it is:

```bash
gem install karl-autotest-growl --source http://gems.github.com
```

This should be a drop in replacement for the previous version of `karl-autotest-growl`, the only thing you should notice more detail from the growl notifications!

I'll post again once the official gem is available on [Rubyforge](http://rubyforge.org/).
