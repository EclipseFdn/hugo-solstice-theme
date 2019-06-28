---
title: "Projects"
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
Title: Example 1
license: epl2.0
logo: //www.eclipse.org/artwork/images/v2/eclipse_foundation_logo.jpg
latest_version: 1.0.1
download_url: //eclipse.org/downloads
website: //eclipse.org/
technology_types: ["Tools", "Sample"]
build_technologies: ["Jenkins"]
other_tags: ["lorem"]
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum molestie sem. Morbi lobortis ullamcorper massa non dapibus. Etiam at enim ultrices, interdum sapien id, sagittis magna. Curabitur eget eros ut risus tempor dignissim. Vestibulum ultricies ac purus ut venenatis. 
~~~~

The `technology_types`, `build_technologies`, and `other_tags` page parameters are examples of taxonomies added to the site configuration with the same name. They represent tags on the projects, and can be set on a site according to tags used by the given site.


**Examples:**

You can see an example on the [Projects page](../../projects/)