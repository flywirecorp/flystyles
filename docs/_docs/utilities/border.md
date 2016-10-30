---
title: Borders
category: utilities
id: borders
file: utilities/border.scss
---

Add borders to left or right, `.u-borderLeft` or `.u-borderRight`.

<div class='exampleView'>
{% example html %}
<span class='u-borderLeft'>.u-borderLeft</span>
<span class='u-borderRight'>.u-borderRight</span>
{% endexample %}
</div>

Also we have the resposive version, acording to every breakpoint: `.u-{size}-{borderLeft|borderRight}`.

<div class='exampleView'>
{% example html %}

<p>
    <span class='u-xs-borderLeft'>Border left on all viewport sizes</span>
    <span class='u-xs-borderRight'>Border right on all viewport sizes</span>
</p>

<p>
    <span class='u-md-borderLeft'>Border left from medium size</span>
    <span class='u-md-borderRight'>Border right from medium size</span>
</p>

<p>
    <span class='u-xl-borderLeft'>Border left from extra-large size</span>
    <span class='u-xl-borderRight'>Border right from extra-large size</span>
</p>
{% endexample %}
</div>
