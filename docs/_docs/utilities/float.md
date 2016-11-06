---
title: Float
category: utilities
id: float
file: utilities/float.scss
---

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport width breakpoints as the grid system: `.{size}-float-{left|none|right}`.

{% example html %}
<div class="fromXSmall-float-left">Float left on all viewport sizes</div><br>
<div class="fromXSmall-float-right">Float right on all viewport sizes</div><br>
<div class="fromXSmall-float-none">Don't float on all viewport sizes</div><br>

<div class="fromSmall-float-right">Float right on viewports sized SM (small) or wider</div><br>
<div class="fromMedium-float-right">Float right on viewports sized MD (medium) or wider</div><br>
<div class="fromLarge-float-right">Float right on viewports sized LG (large) or wider</div><br>
<div class="fromXLarge-float-right">Float right on viewports sized XL (extra-large) or wider</div>

{% endexample %}
