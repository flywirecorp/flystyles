---
title: Buttons
description:
category: components
---

Use button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##### Button tags

The `button` class can be used with `<input>`, `<a>` or `<button>` indistinctly.

{% example html %}
<a class="button button--primary" href="#" role="button">Link</a>
<button class="button button--primary" type="submit">Button</button>
<input class="button button--primary" type="button" value="Input [button]">
<input class="button button--primary" type="submit" value="Input [submit]">
<input class="button button--primary" type="reset" value="Input [reset]">
{% endexample %}


##### Size variations

Size variations: `xs`, `sm`, `md`, `lg` and `xl`, usage: `button button--{size}`.

{% example html %}
<button class="button button--primary button--xs" type="button">extra small</button>
<button class="button button--primary button--sm" type="button">small</button>
<button class="button button--primary button--md" type="button">medium</button>
<button class="button button--primary button--lg" type="button">large</button>
<button class="button button--primary button--xl" type="button">extra large</button>
{% endexample %}

##### Block Button

Create block level buttons—those that span the full width of a parent—by adding `.button--block`;

{% example html %}
<button class="button button--primary button--block button--lg" type="button">Full width button</button>
{% endexample %}

##### Style variations

{% example html %}
<button class="button button--primary" type="button">primary</button>
<button class="button button--secondary" type="button">secondary</button>
<button class="button button--tertiary" type="button">tertiary</button>
<button class="button button--danger" type="button">danger</button>
{% endexample %}


##### Outline styles

{% example html %}
<button class="button button--outline" type="button">outline</button>
<button class="button button--outlinePrimary" type="button">primary</button>
<button class="button button--outlineSecondary" type="button">secondary</button>
<button class="button button--outlineTertiary" type="button">tertiary</button>
<button class="button button--outlineDanger" type="button">danger</button>
{% endexample %}


##### Disabled Button

{% example html %}
<button class="button button--primary" type="button" disabled>disabled by attribute</button>
<button class="button button--primary button--disabled" type="button">disabled by class</button>
{% endexample %}

##### Active state button

{% example html %}
<button class="button button--primary is-active" type="button">Active by state</button>
<button class="button button--primary button--active" type="button">Active by class</button>
{% endexample %}
