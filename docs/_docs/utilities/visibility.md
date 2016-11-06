---
title: Visibility
category: utilities
id: visibility
file: utilities/visibility.scss
---

Visibility classes let you show or hide elements based on screen size or device orientation.
You can use it from a breakpoint, or up to a breakpoint, for example:
`fromSmall-hidden` or `upToSmall-hidden`.

For example, `fromLarge-hidden` will hide the element from large size, that is, when the viewport width is bigger than 992px.


{% example html %}
<span class='fromMedium-hidden'>Hidden on medium up</span>
<span class='upToSmall-hidden'>Hidden on small down</span>
<span class='fromLarge-hidden'>Hidden on large up</span>
{% endexample %}
