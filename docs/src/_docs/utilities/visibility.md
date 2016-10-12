---
title: Visibility
category: utilities
id: visibility
file: utilities/visibility.scss
---

Visibility classes let you show or hide elements based on screen size or device orientation, use: `u-{breakpoint}{Up|Down}-hidden`.
For example, `u-lgUp-hidden` will hide the element from large size, that is, when the viewport width is bigger than 992px.


{% example html %}
<span class='u-mdUp-hidden'>Hidden on medium up</span>
<span class='u-smDown-hidden'>Hidden on small down</span>
<span class='u-lgUp-hidden'>Hidden on large up</span>
{% endexample %}
