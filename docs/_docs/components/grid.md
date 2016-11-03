---
title: Grid
description: Responsive grid system
category: components
file: components/grid.scss
---

Flystyles includes a **mobile-first** grid system for building layouts. It’s based on a 12 column layout and has multiple tiers, one for each media query range.

##### Responsive classes

Start by adding an element with a class of `.GridRow`. This will create a horizontal block to contain vertical columns. Then add elements with a .GridColumn class within that row. Specify the widths of each column in each media query with the `.GridColumn--xs-*`, `.GridColumn--sm-*`, `.GridColumn--md-*`, `.GridColumn--lg-*` and `.GridColumn--xs-*` classes.

##### Example: Mobile and desktop

Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `GridColumn--xs-*` and `.GridColumn--md-*` to your columns. See the example below for a better idea of how it all works.

<div class="exampleView">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="GridRow">
  <div class="GridColumn GridColumn--xs-12 GridColumn--md-8">.GridColumn--xs-12 .GridColumn--md-8</div>
  <div class="GridColumn GridColumn--xs-6 GridColumn--md-4">.GridColumn--xs-6 .GridColumn--md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="GridRow">
  <div class="GridColumn GridColumn--xs-6 GridColumn--md-4">.GridColumn--xs-6 .GridColumn--md-4</div>
  <div class="GridColumn GridColumn--xs-6 GridColumn--md-4">.GridColumn--xs-6 .GridColumn--md-4</div>
  <div class="GridColumn GridColumn--xs-6 GridColumn--md-4">.GridColumn--xs-6 .GridColumn--md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="GridRow">
  <div class="GridColumn GridColumn--xs-6">.GridColumn--xs-6</div>
  <div class="GridColumn GridColumn--xs-6">.GridColumn--xs-6</div>
</div>
{% endexample %}
</div>

##### Same width columns grid

Add a class of the format `.GridRow--[breakpoint]-[columns-per-row]` to change the size of all columns within the row. By default, the max number of columns you can use with block grid are `$grid-columns`.

<div class="exampleView">
{% example html %}

<div class="GridRow GridRow--sm-1 GridRow--md-2 GridRow--lg-4">
  <div class="GridColumn">.GridColumn</div>
  <div class="GridColumn">.GridColumn</div>
  <div class="GridColumn">.GridColumn</div>
  <div class="GridColumn">.GridColumn</div>
  <div class="GridColumn">.GridColumn</div>
  <div class="GridColumn">.GridColumn</div>
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
