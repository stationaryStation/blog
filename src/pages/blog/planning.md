---
layout: "../../layouts/BlogPost.astro"
title: "Lazily bored"
description: "I like to procrastinate and overcomplicate things"
pubDate: "22 December 2022"
id: 10
---

> # TL;DR
> I am a lazy fuck that overcomplicates everything and leaves a lot of things unfinished.

## Wrong

I usually just do things to keep my mind entertained with something, maybe missing out on stuff like chores, tasks on my countless Todo lists, events, and in the worst case scenario, drinking water and eating.

And this has backfired several times in the past but silly me not wanting to learn my lesson just continues to do silly things that are a complete waste of my time, or just do something so unorganized and illogical that after finishing it I don't understand our remember what it did.

And now I am beginning to realise how many things I did wrong, I always do that, but I don't accept that it was me who did them.

## It all starts with an idea

I get really good ideas from time to time, some are pretty useful, others are questionable and some are complex and overwhelming at best. 

For example, let's take this simple note taking application. The application needs to:

1. List tasks
2. Complete tasks
3. Add or remove tasks

Simple and useful application.

Now, *how* will the program work?

- To list tasks, read all the tasks from storage and show them to the user.
- To add tasks, append a new task to that storage.
- To remove tasks, truncate that tasks from storage.
- And lastly, to complete tasks, mark that tasknevercomend

After knowing what the application needs Todo and how the application must do those tasks, I get to work.

I get done listing and adding tasks, but I become really quickly overwhelmed when trying to add functionality to remove and/or complete tasks.

This has happened to me with some programming languages, those include: Rust and Typescript + Svelte.

And that *little* roadblock is just enough to make my mind to collapse onto itself, ultimately blocking it from doing anything.

## Overcomplicating myself

I also overcomplicate myself **a lot** when it comes to anything, really.

When I was doing my Todo application in rust, I went over 4 really complicated and convoluted ways which none worked because I didn't knew at the time how to fix `x` error. And all of those ways of doing the same exact thing where completely wrong from start to finish.

The idea was there, but the execution was horrible.

This has caused to me to leave a huge amount of projects in task. And when I mean leave I mean not touching it for an extremely long time.

I have very few projects finished, one of them being [TF2Clock](https://TF2Clock.vercel.app), which had a very simple idea of exactly counting the days since "Jungle Inferno", TF2's most recent major update, released to the public. And that project was just a few lines of code (11 lines at best) and I didn't have to overcomplicate myself thst much.

Solenoid, in the other hand, is a good example of how messy my code and file structure can be at times.

## The limit

But then I reach what I call "The limit".

What this limit does is that it blocks my mind. Nothing goes in, nothing goes out.

I reach this limit about 4-5 times a day, and it's the thing that has stopped me from completing big or small projects that had errors that I never gotten around on fixing them, but it's just not only errors, that includes features too.

I had planned support for markdown on my client since I started on the rewrite of the project, and I added support for it with a package called `solid-markdown`. But what I did not know is that the component wasn't compatible with server-side rendered apps, and my app was using exactly that.

Meaning that adding support for markdown became more harder than I initially thought to be and I, of course, overcomplicated myself to the point of relying on a really insecure markdown parser that required me to sanitize the contents and strip away any HTML code.

Which I did not know how to do (and I still not know how to do it), so yet again, I leaved that as is. Not fixing the possible security vulnerabilities that this behaviour probably leaves open, and having a really incomplete parser with a quarter of feature parity with Revite, the official revolt.chat client.


