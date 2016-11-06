---
title: Text
category: utilities
id: text
file: utilities/text.scss
---

##### Font Weight

Utility classes to change font weight `.fontWeight-{light|normal|semiBold|bold}`.

{% example html %}
<p class='fontWeight-light'>.fontWeight-light</p>
<p class='fontWeight-normal'>.fontWeight-normal</p>
<p class='fontWeight-semiBold'>.fontWeight-semiBold</p>
<p class='fontWeight-bold'>.fontWeight-bold</p>
{% endexample %}

Based on this config variables:

```scss
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-semi-bold: 600;
$font-weight-bold: 700;
$font-weight-extra-bold: 800;
```

##### Font size

Utility classes to change font size `.fontSize-{xs|sm|md|lg|xl}`.

{% example html %}
<p class='fontSize-xs'>.fontSize-xs</p>
<p class='fontSize-sm'>.fontSize-sm</p>
<p class='fontSize-md'>.fontSize-md</p>
<p class='fontSize-lg'>.fontSize-lg</p>
<p class='fontSize-xl'>.fontSize-xl</p>
{% endexample %}

Based on this config variables:

```scss
$font-size-xs:  .75rem;
$font-size-sm:  .875rem;
$font-size-md:  1rem;
$font-size-lg:  1.25rem;
$font-size-xl:  1.5rem;
```


##### Text Transformation

Change text yo uppercase, lowercase or capitalize first letter. Use: `.textTransform-{lowercase|uppercase|capitalize}`

{% example html %}
<span class='textTransform-lowercase'>LOWERCASE</span>
<span class='textTransform-uppercase'>uppercase</span>
<span class='textTransform-capitalize'>capitalize</span>
{% endexample %}

##### Text Alignment

Simply set text alignment: `textAlign-{left|center|right}`.

{% example html %}
<p class='textAlign-left'>.textAlign-left</p>
<p class='textAlign-center'>.textAlign-center</p>
<p class='textAlign-right'>.textAlign-right</p>
{% endexample %}


##### Responsive Text Alignment

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system: `.{size}-textAlign-{left-center-right}`.

{% example html %}
<p class='fromXSmall-textAlign-center'>Center text on all viewport sizes.</p>
<p class='fromMedium-textAlign-center'>Center text on viewports sized MD (medium) or wider.</p>
<p class='fromLarge-textAlign-center'>Center text on viewports sized LG (large) or wider.</p>
<p class='fromXLarge-textAlign-center'>Center text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}
