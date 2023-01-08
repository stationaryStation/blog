---
layout: "../../layouts/BlogPost.astro"
title: "Solenoid Development: January 1-6"
description: "SOMEBODY TOUCHED MY SPAGHETTI (code)"
pubDate: "January 02 2023"
---

I am back at developing solenoid, this time with a (not so) new approach at changing things, by using a UI framework to avoid CSS entirely and making my code easier to read :D

Also, I kinda wanted to stop doing all of these vent posts here for now, as things are getting a *tiny bit* better.

# Sun, 1 Jan

## Backend Improvements

A lot of code has been refactored, since mostly everything was on a single file because of a stupid design decision I made a long time ago (Since beginning Solenoid).

I have split a lot of components into its respective files, and I had to move all of my Signals and Stores into another file to further refactor those components.

## UI improvements

### New message box

The message box on the old solenoid was really, really cluttered and it looked weird.

Now it's a bit more *consistent*, and more *clean looking*.

But it still looks odd and out of place.


### New message look

Messages now look a lot more like a regular chat application now and should have a better experience overall!

![](</Screenshot from 2023-01-07 21-38-08.png>)

Although replies, reactions, deletes and edits aren't implemented and will come later down the line.

### Markdown

Markdown is a pain in the ass to work with, and I have been relying upon a NPM package called `solid-markdown` since it made my life easier. But it was really hard to port Revite's markdown because it was written in `preact`.

But recently, Insert ported the markdown renderer from Revite to the [new Solid Client](https://github.com/revoltchat/revoltchat-solid-client-monorepo/commit/4363e2ae0eb46ef4f3205a4a06cd6de6d809d8c1)! Allowing me to shamelessly copy over the code from this repo and have absolutely no problems at all.

This means that I have support for code blocks, spoilers, inline code blocks now work!

![](/Markdown.png)

## Deprecated Settings

The following settings have been deprecated and removed:

- Image zoom level

The following experiments have been deprecated:

- Compact mode
- Edited Indicator Format

## New Features

### Embeds

Embeds now render for websites that support open graph!

![](</Screenshot from 2023-01-07 21-39-15.png>)

It relies on January, Revolt's proxy server, for processing the websites, so some websites may look broken and/or won't have links to them.

# Mon, 2 Jan

## UI improvements

### Servers

The server list has been replaced by a sidebar instead of a button group.

### Channels

A sidebar has replaced the channel list, allowing for a cleaner look.

Server banners won't be displayed due to some limitations.

![](</Screenshot from 2023-01-07 21-39-34.png>)

### Messages

Embeds now have a tiny border that changes colour according to the webpage.

Added text embed support

![](</Screenshot from 2023-01-07 21-39-58.png>)

Message authors with masquerades now show up alongside masquerade name to avoid confusion

![](</Screenshot from 2023-01-07 21-40-16.png>)


## Bug fixes

Fixed all messages being fetched every 2 seconds and replace the function with a web socket event

# Tue, 3 Jan

## Even more code refactoring

The settings panel was rightfully detached from the main file and now lives in another file as a component.

Also, some imports from other files, including the main file, have been organized completely, and unused imports has been removed.

![](</Screenshot from 2023-01-07 21-37-30.png>)

## UI Improvements

### Settings

The settings panel now has a new look and feel, looking more modern than ever, plus, it's now full screen to look a little like revolt.

Some experiments have been removed entirely because they are no longer functional or just disabled for now until they can be implemented again.

![](</Screenshot from 2023-01-07 21-49-31.png>)

### Messages

System messages now render correctly on `Message.tsx`, although that file needs to be split off since it's getting too complex already.

Legacy custom emojis and emojis now render properly and will use the “Mutant Remix” emoji pack by default.

### Message Box

The message box now has icons and is no longer using placeholders

`textarea` has been replaced with `input` for now


## New Features

### Emoji packs are here!

Now you can select your favourite emoji packs from Solenoid!

These use the ones provided by revolt.chat, so it's a bit limited.

The list of available emoji packs are:

- Mutant Remix

![](</Screenshot from 2023-01-07 21-51-33.png>)
- Fluent 3D Emoji

![](</Screenshot from 2023-01-07 21-51-06.png>)
- Twemoji

![](</Screenshot from 2023-01-07 21-51-20.png>)

## Bug fixes

Fixed users being able to send messages whenever another message is already being processed

Fixed emojis being too big

## Known bugs

Embed `url_icon`s don't load for certain URLs

Wrong border colour on embeds

Code blocks can cause the `chat_bubble` container to overflow

No image attachment preview on message box (Not yet implemented)

# Wed, 4 Jan

I took a break from development to avoid a potential burnout caused by working for 3 days straight.

# Thu, 5 Jan

I did something new today, I started by making a flowchart of the feature I was going to implement, then I would design a mock-up of that feature, and then I would implement the feature in place.

Basically adding something new to my workflow that *should* increase the quality of the code and the time spent writing that code.

This was the case for the new typing indicator, which is going to release as an experiment for now as I get the logic to work properly.

## UI Improvements

### Messages

Replies have been reimplemented into the message component and have a new look. Although the look isn't final, its current state is ready for production.

Image embeds now look a lot nicer, it still needs more polish though.

![](</Screenshot from 2023-01-07 21-53-26.png>)

### Message box

The message box should be a bit more responsive to changing heights

## New Features

### Typing Indicator

Solenoid now has a fully functional typing indicator!

![](</Screenshot from 2023-01-07 21-55-09.png>)

It allows you to see who is currently typing in a channel alongside its profile picture.

Currently, it looks like Revolt's indicator, but in a later commit, you will be able to toggle it and customize how it looks.

## Fixed bugs

Fixed embed's `url_icon` displaying a broken image

Fixed avatars now scaling properly

## Known Bugs 

Wrong border colour on embeds

Code blocks can cause the `chat_bubble` container to overflow

No image attachment preview on message box (Not yet implemented)

The wrong emoji pack is used for Unicode emojis

Every time messages load, a new web socket listener is created, this may cause errors in the long run.

Sidebars make the portrait mobile experience unenjoyable and frustrating, as messages don't fit.

# Fri, 6 Jan

## Pull requests

Accepted [#56](https://github.com/Revolt-Unofficial-Clients/Solenoid/pull/56) from @Valenplayer3000 (Bloom) on GitHub: “feat: New login design”

## UI improvements

### Login

The login UI has changed since the initial solenoid release!

![](</Screenshot from 2023-01-07 21-40-41.png>)

Thanks to @Bloom on revolt.chat, the login looks a bit similar to Revolt's, basically making the experience a bit more delightful and clean.

Also, the login page is fully responsive, so it should fit on bigger and smaller devices!

The background image used on the login page is from [Sebastian Svenson on Unsplash!](https://unsplash.com/@sebastiansvenson) Be sure to check their work!

## Bug fixes

Unicode's emojis now display the right emoji pack

Deletes and edits are now handled properly and should not empty the array

Border colours are now correct for embeds

# Sat, 7 Jan

## Pull requests 

Requested change in [#57](https://github.com/Revolt-Unofficial-Clients/Solenoid/pull/57) by @Valenplayer3000 (Bloom) on GitHub: “fix: 'Login with token' button overflowed with login container”

# Final Thoughts

This week was a really productive one at best, but I could still use more time to develop this beloved project of mine. But sadly, I don't have the time (nor the required motivation) to continue it long-term.

The codebase is too large for me to handle by myself, and I often need help with stuff that's way out of my knowledge.


