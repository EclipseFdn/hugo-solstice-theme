---
title: "Meeting Minutes"
date: 2019-04-17T15:52:13-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

You can add meeting minutes to a markdown file using the shortcode: **{{&lt; meeting_minutes &gt;}}**

To add meeting minutes, create a **meeting_minutes.yml** file in the data folder and add the code below:

~~~~
items:
   type_1:
     -
       title: Type 1 - Hugo Solstice Theme Num-1
       url: https://github.com/EclipseFdn/hugo-solstice-theme

   type_2:
     -
       title: Type 2 - Hugo Solstice Theme Num-1
       url: https://github.com/EclipseFdn/hugo-solstice-theme
~~~~

**Examples:**

Here is an example of the output of the meeting minutes shortcode.

{{< meeting_minutes >}}
