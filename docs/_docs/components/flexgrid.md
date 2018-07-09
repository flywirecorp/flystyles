---
title: FlexGrid
description: Responsive grid system
category: components
file: components/flexgrid.scss
---

Flystyles includes a **mobile-first** grid system for building layouts. It’s based on a 12 column layout and has multiple tiers, one for each media query range.

##### Responsive classes

Start by adding an element with a class of `.FlexGridRow`. This will create a horizontal block to contain vertical columns. Then add elements with a .FlexGridColumn class within that row. Specify the widths of each column in each media query with the `.FlexFlexGridColumn--fromXSmall-*`, `.FlexFlexGridColumn--fromSmall-*`, `.FlexFlexGridColumn--fromMedium-*`, `.FlexFlexGridColumn--fromLarge-*` and `.FlexFlexGridColumn--fromXSmall-*` classes.

##### Example: Mobile and desktop

Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `FlexGridColumn--fromXSmall-*` and `.FlexGridColumn--fromMedium-*` to your columns. See the example below for a better idea of how it all works.

<div class="exampleView">
{% example html %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="FlexGridRow">
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-12 FlexGridColumn--fromMedium-8">FlexGridColumn FlexGridColumn--fromXSmall-12 FlexGridColumn--fromMedium-8</div>
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4">FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->

<div class="FlexGridRow">
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4">FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4</div>
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4">FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4</div>
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4">FlexGridColumn FlexGridColumn--fromXSmall-6 FlexGridColumn--fromMedium-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->

<div class="FlexGridRow">
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6">FlexGridColumn FlexGridColumn--fromXSmall-6</div>
  <div class="FlexGridColumn FlexGridColumn--fromXSmall-6">FlexGridColumn FlexGridColumn--fromXSmall-6</div>
</div>
{% endexample %}
</div>

##### Same width columns grid

Add a class of the format `.GridRow--[breakpoint]-[columns-per-row]` to change the size of all columns within the row. By default, the max number of columns you can use with block grid are `$grid-columns`.

<div class="exampleView">
{% example html %}
<div class="FlexGridRow FlexGridRow--fromSmall-1 FlexGridRow--fromMedium-2 FlexGridRow--fromLarge-4">
  <div class="FlexGridColumn">FlexGridColumn</div>
  <div class="FlexGridColumn">FlexGridColumn</div>
  <div class="FlexGridColumn">FlexGridColumn</div>
  <div class="FlexGridColumn">FlexGridColumn</div>
  <div class="FlexGridColumn">FlexGridColumn</div>
  <div class="FlexGridColumn">FlexGridColumn</div>
</div>
{% endexample %}
</div>

##### Offsets

Move columns to the right using .FlexGridColumn--fromMedium-offset-_ classes. These classes increase the left margin of a column by _ columns. For example, .FlexGridColumn--fromMedium-offset-4 moves .FlexGridColumn--fromMedium-4 over four columns.

<div class="exampleView">
{% example html %}
<div class="FlexGridRow">
  <div class="FlexGridColumn FlexGridColumn--fromMedium-4 FlexGridColumn--fromMedium-offset-2">FlexGridColumn</div>
  <div class="FlexGridColumn FlexGridColumn--fromMedium-4">FlexGridColumn</div>
</div>
{% endexample %}
</div>

##### Grid Configuration

{% highlight scss %}
$grid-columns: 12;
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
