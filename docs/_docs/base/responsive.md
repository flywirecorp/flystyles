---
title: Responsive
category: base
description: Classes and mixins for Responsive Web Design
---

##### Basic breakpoints:


```scss
$grid-breakpoints: (
  xSmall: 0,
  small: 544px,
  medium: 768px,
  large: 992px,
  xLarge: 1200px
) !default;
```



##### Responsive classes

Most classes have responsive variations. We have 5 responsive breakpoints, so there is a separate class for each breakpoint. These classes follow a simple size scale.

To apply a breakpoint to a class, just prefix the class with `.fromXSmall-` (0px), `.fromSmall-` (544px), `.fromMedium-` (768px), `.fromLarge-` (992px) or `.fromXLarge-` (1200px).

For example: `.fromSmall-textAlign-center`, `.fromMedium-hidden` or `.GridRow--fromMedium-6`.


##### Responsive mixins

We have 3 mixins to create media queries with our breakpoints:

###### media-down($breakpoint)
Creates a media query with max width `$breakpoint`.

###### media-up($breakpoint)
Creates a media query with min width `$breakpoint`.

###### media-between($breakpoint-from, $breakpoint-to)
Creates a media query with max width `$breakpoint-to` and min width `$breakpoint-from`.

```scss
.docs-header {
  margin-bottom: 2rem;
  background: #fff;

  @include media-up(medium) {
    height: 120px;
  }
}
```
