---
layout: "../../layouts/BlogPost.astro"
title: "Writting Blogs with Obsidian"
description: "Station talks about writting blog posts with obsidian"
pubDate: "November 20 2022"
heroImage: "/placeholder-hero.jpg"
---

Writting blogs using neovim is certainly cool and most importantly really efficient
but one of my conserns with it is that I cannot really preview in real time what
I am writting. For example, let's say that I have a header, a codeblock and a link.

```markdown
# Header
[amazing link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
`console.log("amogus")`
```

On neovim, there is no preview window by default (or any live preview feature whatsoever), meaning that if I want to know how does my blog look, I need to switch to my browser and see if I used the right syntax for the text.
<img src="/neovim-markdown" title="Neovim buffer with a header, a link pointing to a youtube video and a inline codeblock that says 'console.log('amogus')'" alt="Neovim buffer with a header, a link pointing to a youtube video and a inline codeblock that says 'console.log('amogus')'"/>

But on obsidian I don't have to worry about switching from window to window since a live preview feature is already enabled by default. So I don't have that problem anymore. 
<img src="/obsidian-markdown" title="Obsidian on a file containing a header, a link and a inline codeblock that says 'console.log('amogus')'"/>

And you might think that "Well, It's on a terminal. Some things can't really render correctly on there since it's all made of text." and you would be right, terminals aren't really made to be used as markdown renderers.

Another thing that I like about obsidian is that it has a built-in spellchecker, which I really welcome since my primary language is Spanish, not English (even though that sometimes the spellchecker can get things wrong).

But sadly Obsidian (As far as I am aware) doesn't support `.mdx` files (Extended markdown with support for reactive content and other really cool stuff), which at some point, I will use on this blog to show live previews of front-end code without having to touch react/solid/svelte/vue/insert-framework-here