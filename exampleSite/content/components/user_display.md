---
title: "Users display"
date: 2019-04-17T15:52:27-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

!!TODO

## With carousel

{{< user_display event="2019" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.

Duis leo erat, pharetra eget gravida nec, condimentum non justo. Proin eu nisl ac magna cursus gravida. Sed varius justo egestas, bibendum urna et, tempor elit. Donec sagittis, libero quis commodo consequat, sem eros vulputate velit, in porta est erat elementum dolor. Aliquam tempor, dolor et consectetur bibendum, neque nunc fermentum sapien, eu pharetra ante eros vel leo. Nunc sit amet urna ac lorem molestie fermentum. 
{{< /user_display >}}

## No carousel

{{< user_display event="2019" useCarousel="false" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /user_display >}}

## No inner content
{{< user_display event="2019" useCarousel="false" />}}

## Header class
{{< user_display event="2019" headerClass="h3" useCarousel="false" />}}

## Section class
{{< user_display event="2019" sectionClass="text-center" useCarousel="false" />}}

## Title
{{< user_display event="2019" useCarousel="false" title="Some new title" />}}

## Different source
{{< user_display event="2019" useCarousel="false" source="speakers" />}}

## Subpage w/ default event

Expect url like `/2019/user-bios`.  

{{< user_display event="2019" useCarousel="false" subpage="user_bios" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /user_display >}}

## Subpage w/ default event

Expect url like `/single_page/user_bios`.  

{{< user_display useCarousel="false" subpage="single_page/user_bios" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /user_display >}}