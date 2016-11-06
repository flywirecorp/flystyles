---
title: Borders
category: utilities
id: borders
file: utilities/border.scss
---

Add borders to left or right, `.borderLeft` or `.borderRight`.

<div class='exampleView'>
{% example html %}
<span class='borderLeft'>.borderLeft</span>
<span class='borderRight'>.borderRight</span>
{% endexample %}
</div>

Also we have the resposive version, acording to every breakpoint: `.{size}-{borderLeft|borderRight}`.

<div class='exampleView'>
{% example html %}

<p>
    <span class='fromXSmall-borderLeft'>Border left on all viewport sizes</span>
    <span class='fromXSmall-borderRight'>Border right on all viewport sizes</span>
</p>

<p>
    <span class='fromMedium-borderLeft'>Border left from medium size</span>
    <span class='fromMedium-borderRight'>Border right from medium size</span>
</p>

<p>
    <span class='fromXLarge-borderLeft'>Border left from extra-large size</span>
    <span class='fromXLarge-borderRight'>Border right from extra-large size</span>
</p>
{% endexample %}
</div>
