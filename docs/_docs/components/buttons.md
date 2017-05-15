---
title: Buttons
description:
category: components
file: components/Button/Button.scss
---


Use button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##### Button tags

The `Button` class can be used with `<input>`, `<a>` or `<button>` indistinctly.

{% example html %}
<a class="Button Button--primary" href="#" role="button">Link</a>
<button class="Button Button--primary" type="submit">Button</button>
<input class="Button Button--primary" type="button" value="Input [button]">
<input class="Button Button--primary" type="submit" value="Input [submit]">
<input class="Button Button--primary" type="reset" value="Input [reset]">
{% endexample %}


##### Size variations

Size variations: `xs`, `sm`, `md`, `lg` and `xl`, usage: `button Button--{size}`.

{% example html %}
<button class="Button Button--primary Button--xs" type="button">extra small</button>
<button class="Button Button--primary Button--sm" type="button">small</button>
<button class="Button Button--primary Button--md" type="button">medium</button>
<button class="Button Button--primary Button--lg" type="button">large</button>
<button class="Button Button--primary Button--xl" type="button">extra large</button>
{% endexample %}

##### Block Button

Create block level buttons—those that span the full width of a parent—by adding `.Button--block`;

{% example html %}
<button class="Button Button--primary Button--block Button--lg" type="button">Full width button</button>
{% endexample %}

##### Style variations

{% example html %}
<button class="Button Button--primary" type="button">primary</button>
<button class="Button Button--secondary" type="button">secondary</button>
<button class="Button Button--tertiary" type="button">tertiary</button>
<button class="Button Button--danger" type="button">danger</button>
{% endexample %}


##### Outline styles

<div class='bg-primary'>
{% example html %}
<button class="Button Button--outline" type="button">outline</button>
<button class="Button Button--outlineWhite" type="button">white</button>
<button class="Button Button--outlinePrimary" type="button">primary</button>
<button class="Button Button--outlineSecondary" type="button">secondary</button>
<button class="Button Button--outlineTertiary" type="button">tertiary</button>
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
