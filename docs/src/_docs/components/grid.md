---
title: Grid
description: Responsive grid system
category: components
---

Flystyles includes a **mobile-first** grid system for building layouts. It’s based on a 12 column layout and has multiple tiers, one for each media query range.

##### Responsive classes

Start by adding an element with a class of `.gridRow`. This will create a horizontal block to contain vertical columns. Then add elements with a .gridColumn class within that row. Specify the widths of each column in each media query with the `.gridColumn--xs-*`, `.gridColumn--sm-*`, `.gridColumn--md-*`, `.gridColumn--lg-*` and `.gridColumn--xs-*` classes.

##### Example: Mobile and desktop

Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `gridColumn--xs-*` and `.gridColumn--md-*` to your columns. See the example below for a better idea of how it all works.

<div class="bd-example-row">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="gridRow">
  <div class="gridColumn gridColumn--xs-12 gridColumn--md-8">.gridColumn--xs-12 .gridColumn--md-8</div>
  <div class="gridColumn gridColumn--xs-6 gridColumn--md-4">.gridColumn--xs-6 .gridColumn--md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="gridRow">
  <div class="gridColumn gridColumn--xs-6 gridColumn--md-4">.gridColumn--xs-6 .gridColumn--md-4</div>
  <div class="gridColumn gridColumn--xs-6 gridColumn--md-4">.gridColumn--xs-6 .gridColumn--md-4</div>
  <div class="gridColumn gridColumn--xs-6 gridColumn--md-4">.gridColumn--xs-6 .gridColumn--md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="gridRow">
  <div class="gridColumn gridColumn--xs-6">.gridColumn--xs-6</div>
  <div class="gridColumn gridColumn--xs-6">.gridColumn--xs-6</div>
</div>
{% endexample %}
</div>


##### Grid Configuration

{% highlight scss %}
$grid-columns:      12;
$grid-gutter-width: 30px;

$grid-breakpoints: (
  // Extra small screen / phone
  xs: 0,
  // Small screen / phone
  sm: 544px,
  // Medium screen / tablet
  md: 768px,
  // Large screen / desktop
  lg: 992px,
  // Extra large screen / wide desktop
  xl: 1200px
);
{% endhighlight %}
