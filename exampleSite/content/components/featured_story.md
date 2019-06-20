---
title: "Featured Story"
date: 2019-06-23T15:50:36-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
show_featured_story: true
---

You can add a featured story to a markdown file using the page parameter: `show_featured_story: true`

To add featured stories, create a **featuredstory.yml** file in the data folder and add the code below:

~~~~
defaultRight: |
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </p>
          <p>Sign up to our <br>Newsletter</p>
          <form action="https://eclipsecon.us6.list-manage.com/subscribe/post" method="post" target="_blank">
            <div class="form-group">
              <input type="hidden" name="u" value="eaf9e1f06f194eadc66788a85">
              <input type="hidden" name="id" value="98ae69e304">
            </div>
            <input type="submit" value="Subscribe" name="subscribe" class="button btn btn-primary">
          </form>
items:
  -
    preamble: Now available
    title: <strong>Eclipse IDE 2019-06</strong>
    content: Get the latest version of the Eclipse IDE.
    link: |
          <ul class="list-inline">
            <li><a class="btn btn-primary btn-lg" href="/go/PROMO_ECLIPSEIDE_FOOTER@FEATURED_STORY?utm_source=eclipse_foundation&amp;utm_medium=featured_story&amp;utm_campaign=eclipse_ide_2019_06">Download</a></li>
            <li><a class="btn btn-default btn-lg" href="/eclipseide/">Learn More</a></li>
          </ul>
    bgImgSrc: https://www.eclipse.org/home/images/2019-06-bg.jpg
    startDate: 2019-06-20
    endDate: 2099-07-30
    type: story
  -
    fullContent: |
      <h2>Wow, my own custom content</h2>
      <p>Things I could do with this space:</p>
      <ol>
        <li>Arbitrary lists!
        <li>Bombastic text!
        <li>Custom content!
      </ol>
    bgImgSrc: https://www.eclipse.org/home/images/ece-2019-banner.jpg
    startDate: 2019-06-17
    endDate: 2099-07-30
    type: both
~~~~

Required fields:  

- defaultRight  
- startDate  
- endDate  
- type  

The default look and feel is achieved by using a mix of the preamble, title, content, and link. The only field that is always printed is title, otherwise the other fields are optional and will not print if missing or empty.  

Alternate functionality replacing the template content can be achieved using the fullContent property, which will allow free form HTML. This option comes with the caveat that custom content support is maintained for special cases, and it is encouraged to use the default look and feel defined above.

If there are multiple valid stories at a single time to display, the component will randomly select one and display it on the page.

The right side content, which can hold ad content. or other static content such as links to newsletter mailing lists, are set up with raw HTML. These sections are freeform and allows flexibility for this content.

**Examples:**

Included above the content of this page is a sample of the featured story component.
