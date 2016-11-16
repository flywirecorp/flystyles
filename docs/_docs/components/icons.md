---
title: Icons
description: SVG Iconset
category: components
file: components/Icon/Icon.scss
---

Flystyles offers a SVG iconset.

##### Iconset

{% example html %}
<span class="Icon Icon--calendar Icon--xl margin-md"></span>
<span class="Icon Icon--arrowDown Icon--xl margin-md"></span>
<span class="Icon Icon--arrowUp Icon--xl margin-md"></span>
<span class="Icon Icon--success Icon--xl margin-md"></span>
<span class="Icon Icon--danger Icon--xl margin-md"></span>
{% endexample %}

##### Mixins

This icons are embedded in a CSS `background-image`.
The color of the icons can be changed via scss variable:

```scss
// src/components/Icon/_config.scss

$icon-calendar-color: $color-gray !default;
$icon-arrow-down-color: $color-gray-light !default;
$icon-arrow-up-color: $color-gray-light !default;
$icon-danger-color: $color-danger !default;
$icon-success-color: $color-success !default;
...
```

You can use the `svg-icon` mixin to add background images to your elements.

```scss
.Input--succes {
  background-image: svg-icon(success);
  background-repeat: no-repeat;
  background-position: calc(100% - .5rem) center;
  background-size: 1rem;
  border-color: $color-success;
}
```
