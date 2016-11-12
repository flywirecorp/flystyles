---
title: Spacing
category: utilities
id: spacing
file: utilities/spacing.scss
---

Assign margin or padding to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.

The classes are named using the format: `.{property}-{size}`.

Where `property` is one of:

  - `margin`, `marginTop`, `marginBottom`: for classes that set margin
  - `padding`, `paddingTop`, `paddingBottom`: for classes that set padding

And size is `0`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` with this configurable values:

```scss
// config.scss
$spacer-xs: .3rem !default;
$spacer-sm: .5rem !default;
$spacer-md: 1rem !default;
$spacer-lg: 1.5rem !default;
$spacer-xl: 2rem !default;
$spacer-xxl: 3rem !default;
```

For example:

{% example html %}
<p class="margin-0 padding-xs">margin-0 padding-xs</p>
<p class="margin-sm padding-xxl">margin-sm padding-xxl</p>
{% endexample %}


##### Responsive Spacing classes

Margins and paddings can be applied responsively. For example:
`.fromSmall-marginTop-0`, remove margin top from `Small` breackpoint (544px). That is, from 544px the element won't have margin top.

{% example html %}
<p class="marginTop-xxl padding-xxl fromMedium-marginTop-0">margin-0 padding-xs</p>
<p class="margin-sm padding-xxl fromLarge-padding-0">margin-sm padding-xxl</p>
{% endexample %}
