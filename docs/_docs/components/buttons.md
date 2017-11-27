---
title: Buttons
description:
category: components
file: components/Button/Button.scss
---


Use button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##### Block Button

Create block level buttons—those that span the full width of a parent—by adding `.Button--block`;

{% example html %}
<button class="Button Button--primary Button--block Button--lg" type="button">Full width button</button>
{% endexample %}

##### Style variations

{% example html %}
<button class="Button Button--primary" type="button">primary</button>
<button class="Button Button--danger" type="button">danger</button>
{% endexample %}

##### Outline styles

<div class='bg-black'>
{% example html %}
<button class="Button Button--outline" type="button">outline</button>
<button class="Button Button--outlineWhite" type="button">white</button>
<button class="Button Button--outlineDanger" type="button">danger</button>
{% endexample %}
</div>

##### Disabled Button

{% example html %}
<button class="Button Button--primary" type="button" disabled>disabled by attribute</button>
<button class="Button Button--primary Button--disabled" type="button">disabled by class</button>
{% endexample %}

##### Active state button

{% example html %}
<button class="Button Button--primary is-active" type="button">Active by state</button>
<button class="Button Button--primary Button--active" type="button">Active by class</button>
{% endexample %}
