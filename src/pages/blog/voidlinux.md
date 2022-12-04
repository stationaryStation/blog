---
layout: "../../layouts/BlogPost.astro"
title: "The cozy (void) on my laptop"
description: "How to not distrohop 101 by someone who distrohops every single month"
pubDate: "December 3 2022"
heroImage: "/placeholder-hero.jpg"
id: 8
---

# Helo i am in a black hole rn send help please :(

Jokes aside, I have switched from the glorious Arch Linux to the menacing Void Linux because of a stupid decision of mine of running a roulette with the distros that [Revolt Lounge](https://rvlt.gg/testers) Regulars want me to use for an entire month. (Chat logs at the end of the blog article)

Yes, an entire **fucking** month. But I have used Void for like a week so it must be an *easy* challenge right?

R-Right?

Well, time will tell. But first I need to tell my first impressions of the distro, installer and everything.

# First Impressions (of a big black void)

## *The* installer

This is the thing that I always love of void, it is a bit confusing at first glance, mainly the filesystem part which always throws me up, but aside from that, it's a pretty good installer! It's simple enough to make anyone use the distro with almost minimal effort. You can also install it manually, similar to arch these days where you have the option to use `archinstall`.

The installer looks like this:

![An image of the Void Linux Installer](/voidinstaller.jpg)

It's a simple ncurses installer which has nothing really going on.

## First Boot

After doing the initial setup on the installer and you boot into your pc/laptop, you go into a familiar place. This place being `tty`, this is where you decide what to do after installing.

But we can't do much on a black screen with just white text right?

True, true.

But remember that minimal distros doesn't have desktop enviroments by default because that removes the cool part about minimalism.

We need to install the repos, the drivers, the networking and most importantly, learn how `runit` works.

## Wacky Services

So, yeah. Say goodbye to `systemd` because `runit` is going to be your friend on this amazing journey.

RunIt is an lightweight alternative to SystemD that just manages your system/user services.

RunIt works a little bit different. Unlike SystemD, RunIt works using folders and not `.service` files. Meaning that they are not cross-compatible.

To enable a service, you need to make a [symbolic link](https://unix.stackexchange.com/questions/26896/how-does-linux-work-with-symbolic-links) from `/etc/sv/<service>` to the `/var/service/` folder.

And to run it once, you use `sv up <service>`.

Pretty easy right?

# Conclusion (For now)

I like how Void Linux works and how it is blazingly fast. In fact, the package manager is the best thing about it. But to make a full review about the distro, I first need to use it for this entire month.

So do I like the experience so far?

> Yes! I do like the experience so far! But I miss OpenTabletDriver, which uses a SystemD Service by default, but maybe someday I will find a way to make RunIt services myself.


# Average Rolt Conversation

![Station: also you guys decide what os i will use this month i will spin a roulette with the distros you want me to use and the one that gets chosen is the one that i am going to use for this entire month](/trol.png)
![Lokicalmito: void, actually, kiss :trol: Inderix: linux from scratch, you'll spend the whole month installing a system you can actually use :trol:](/Screenshot_20221203_212332.png)
![Error: Might I recommend Gentoo?](/Screenshot_20221203_212357.png)
![Lokicalmito: alpine linux, unironically amongOS](/Screenshot_20221203_212349.png)
![Station: My brother added uwuntu and i added fedora](/Screenshot_20221203_212409.png)