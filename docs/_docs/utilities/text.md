---
title: Text
category: utilities
id: text
file: utilities/text.scss
---

##### Font Weight

Utility classes to change font weight `.u-fontWeight-{light|normal|semiBold|bold}`.

{% example html %}
<p class='u-fontWeight-light'>.u-fontWeight-light</p>
<p class='u-fontWeight-normal'>.u-fontWeight-normal</p>
<p class='u-fontWeight-semiBold'>.u-fontWeight-semiBold</p>
<p class='u-fontWeight-bold'>.u-fontWeight-bold</p>
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

Utility classes to change font size `.u-fontSize-{xs|sm|md|lg|xl}`.

{% example html %}
<p class='u-fontSize-xs'>.u-fontSize-xs</p>
<p class='u-fontSize-sm'>.u-fontSize-sm</p>
<p class='u-fontSize-md'>.u-fontSize-md</p>
<p class='u-fontSize-lg'>.u-fontSize-lg</p>
<p class='u-fontSize-xl'>.u-fontSize-xl</p>
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

Change text yo uppercase, lowercase or capitalize first letter. Use: `.u-textTransform-{lowercase|uppercase|capitalize}`

{% example html %}
<span class='u-textTransform-lowercase'>LOWERCASE</span>
<span class='u-textTransform-uppercase'>uppercase</span>
<span class='u-textTransform-capitalize'>capitalize</span>
{% endexample %}

##### Text Alignment

Simply set text alignment: `u-textAlign-{left|center|right}`.

{% example html %}
<p class='u-textAlign-left'>.u-textAlign-left</p>
<p class='u-textAlign-center'>.u-textAlign-center</p>
<p class='u-textAlign-right'>.u-textAlign-right</p>
{% endexample %}


##### Responsive Text Alignment

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system: `.u-{size}-textAlign-{left-center-right}`.

{% example html %}
<p class='u-xs-textAlign-center'>Center text on all viewport sizes.</p>
<p class='u-md-textAlign-center'>Center text on viewports sized MD (medium) or wider.</p>
<p class='u-lg-textAlign-center'>Center text on viewports sized LG (large) or wider.</p>
<p class='u-xl-textAlign-center'>Center text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}
