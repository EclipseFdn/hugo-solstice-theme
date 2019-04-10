---
title: "Home"
seo_title: "Hugo Solstice Theme"
headline: "Headline"
subtitle: "Subtitle"
seo_title: "Home"
description: "This is an example of the Eclipse Foundation Solstice theme for Hugo."
tagline: "Tagline"
links: [[href: "about/", text: "About"], [href: "news/", text: "News"]]
date: 2018-04-05T15:50:25-04:00
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
layout: single
---

{{< events >}}

## Members

<div class="members text-center margin-bottom-50 padding-40" style="background-color:#f1f3f7;">
  {{< taxonomy_list taxonomy="participation_levels" section="membership" term="participation_level_1" >}}
  {{< taxonomy_list taxonomy="participation_levels" section="membership" term="participation_level_2" >}}
</div>

## Testimonials
{{< testimonials >}}

## Meeting Minutes
{{< meeting_minutes >}}


<!-- Announcements -->
<div class="row margin-top-20 text-center">
  <div class="col-sm-12 news-list">
    {{< taxonomy_list taxonomy="categories" section="news" term="announcements" icon="activity" >}}
  </div>
  <div class="col-sm-12 news-list">
    {{< taxonomy_list taxonomy="categories" section="news" term="community_news" icon="tv" >}}
  </div>
</div>

