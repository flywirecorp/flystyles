---
title: Visibility
category: utilities
id: visibility
file: utilities/visibility.scss
---

Visibility classes let you show or hide elements. You can use it from a breakpoint, or up to a breakpoint if you need to hide it based on screen size or device orientation, for example:
`fromSmall-hidden` or `upToSmall-hidden`.

For example, `fromLarge-hidden` will hide the element from large size, that is, when the viewport width is bigger than 992px.

You can also use `opacity-0` and `opacity-1` if you want to show or hide an element regardless of the breakpoints.


{% example html %}
<span class='fromMedium-hidden'>Hidden on medium up</span>
<span class='upToSmall-hidden'>Hidden on small down</span>
<span class='fromLarge-hidden'>Hidden on large up</span>
<span class='opacity-1'>Always shown, change it to 0 to hide it</span>
{% endexample %}
