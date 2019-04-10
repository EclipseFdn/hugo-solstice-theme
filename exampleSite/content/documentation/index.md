---
title: "Documentation"
seo_title: "Documentation"
description: "This is an example of the Eclipse Foundation Solstice theme for Hugo."
date: 2018-04-05T15:50:25-04:00
---

## Theme Components

### News

You can add news items as lists.

To add news, create markdown files in the content/news folder and add the following code to those files:

~~~~
---
title: "Hello World: Hugo Solstice Theme"
date: 2019-03-14T05:10:00-00:00
#link: ""
categories: ["announcements"]
---

This is an example of a news item
~~~~

**Examples:**

You can see an example on the [News page](/news/)

---

### Members

To add members, create markdown files in the content/membership/members folder and add the following code to those files:

~~~~
---
title: "Member 1"
date: 2019-03-14T05:10:00-00:00
draft: false
logo: "https://www.eclipse.org/eclipse.org-common/themes/solstice/public/images/logo/eclipse-foundation-grey-orange.svg"
website: ""
participation_levels: "participation_level_1"
member_id: 1
---

This is an example of a members item.
~~~~

**Examples:**

You can see an example on the [Members page](/membership/members/)

---

### Events

You can add events to a markdown file using the following shortcodes: **{{&lt; events &gt;}}** or **{{&lt; events_table &gt;}}**

To add events, create a **events.yml** file in the data folder and add the code bellow:

~~~~
title: Events
tagline: Come meet the Eclipse Community at these upcoming events!

#buttons
more_button_text: View More Events <i class="fa fa-arrow-down"></i>
submit_button_text: Submit Event
submit_button_link: https://github.com/EclipseFdn/hugo-solstice-theme/issues/new

items:
  -
    name: Example Event 1
    location: Location, Location
    date: Month xx, xxxx
    expire_date: 2030-03-28T23:59:00-00:00
    button_url: https://github.com/EclipseFdn/hugo-solstice-theme/issues/new
    button_text: Button text
  -
    name: Example Event 2
    location: Location, Location
    date: Month xx, xxxx
    expire_date: 2030-03-28T23:59:00-00:00
    button_url: https://github.com/EclipseFdn/hugo-solstice-theme/issues/new
    button_text: Button text
~~~~

**Examples:**

Here is an example of the events in a block view:

{{< events >}}

Here is an example of the events in a table view:

{{< events_table >}}

---

### Meeting Minutes

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

---

### Testimonials

You can add testimonials to a markdown file using the shortcode **{{&lt; testimonials &gt;}}**

To add testimonials, create a **testimonials.yml** file in the data folder and add the code below:

~~~~
items:
  -
    text: Text of the testimonial 1
    title: Name of the person
  -
    text: Text of the testimonial 2
    title: Name of the person
~~~~

---

### Youtube

You can add a youtube video to a markdown file using the following shortcode: **{{&lt; youtube &quot;6BsxSJJb6-g&quot; &gt;}}**

{{< youtube "6BsxSJJb6-g" >}}

### Taxonomy List

You can display taxonomy lists to a markdown file using the following shortcode: **{{&lt; taxonomy_list taxonomy=&quot;participation_levels&quot; section=&quot;membership&quot; term=&quot;participation_level_1&quot; &gt;}}**

**Examples:**

{{< taxonomy_list taxonomy="participation_levels" section="membership" term="participation_level_1" >}}