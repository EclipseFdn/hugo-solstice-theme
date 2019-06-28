---
title: "Members"
date: 2019-06-27T15:51:20-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

To add projects, create markdown files in the content/projects/<project name> folder and add the following code to the index.md file:

~~~~
---
Title: Eclipse GlassFish Tools
license: epl2.0
logo: //projects.eclipse.org/sites/default/files/glassfish.png
release-url: https://projects.eclipse.org/projects/webtools.glassfish-tools/downloads
latest-version: 1.0.1
technology_types: ["Tools", "Sample"]
build_technologies: ["Jenkins"]
other_tags: ["glassfish"]
---

This is an example of a members item.
~~~~

The `technology_types`, `build_technologies`, and `other_tags` page parameters are examples of taxonomies added to the site configuration with the same name. They represent tags on the projects, and can be set on a site according to tags used by the given site.


**Examples:**

You can see an example on the [Projects page](/projects/)