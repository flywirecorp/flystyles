---
title: Buttons
description:
category: components
file: components/Button/Button.scss
---

Use button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##### Style variations

{% example html %}
<button class="Button Button--primary" type="button">primary</button>
<button class="Button Button--danger" type="button">danger</button>
<button class="Button Button--warning" type="button">warning</button>
<button class="Button Button--info" type="button">info</button>
<button class="Button Button--success" type="button">success</button>
<button class="Button" type="button">default</button>
<button class="Button Button--primary" disabled type="button">disabled</button>
{% endexample %}

##### Size variations

{% example html %}
<button class="Button Button--medium" type="button">medium</button>
{% endexample %}

##### Block Button

Create block level buttons—those that span the full width of a parent—by adding `.Button--block`;

{% example html %}
<button class="Button Button--primary Button--block" type="button">Full width button</button>
{% endexample %}

##### Outline styles (black background)

<div class='bg-black'>
{% example html %}
<button class="Button Button--outline" type="button">outline</button>
<button class="Button Button--outlinePrimary" type="button">primary</button>
<button class="Button Button--outlineWhite" type="button">white</button>
<button class="Button Button--outlineDanger" type="button">danger</button>
<button class="Button Button--outlineWarning" type="button">warning</button>
{% endexample %}
</div>

##### Outline styles (white background)

{% example html %}
<button class="Button Button--outline" type="button">outline</button>
<button class="Button Button--outlinePrimary" type="button">primary</button>
<button class="Button Button--outlineInfo" type="button">info</button>
<button class="Button Button--outlineDanger" type="button">danger</button>
<button class="Button Button--outlineSuccess" type="button">success</button>

{% endexample %}

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

##### Button with Icon

{% example html %}
<button class="Button Button--primary Button--withIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 490.4 490.4" class="Button-icon">
<path d="M490.4 245.2C490.4 110 380.4 0 245.2 0S0 110 0 245.2s110 245.2 245.2 245.2 245.2-110 245.2-245.2zm-465.9 0c0-121.7 99-220.7 220.7-220.7s220.7 99 220.7 220.7-99 220.7-220.7 220.7-220.7-99-220.7-220.7z"/>
<path d="M253.9 360.4l68.9-68.9c4.8-4.8 4.8-12.5 0-17.3s-12.5-4.8-17.3 0l-48 48V138.7c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l68.9 68.9c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.1 8.7-3.5z"/>
</svg>
<span class="Button-text">Download</span>
</button>

<button class="Button Button--outlinePrimary Button--withIcon">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 490.4 490.4" class="Button-icon">
    <path d="M490.4 245.2C490.4 110 380.4 0 245.2 0S0 110 0 245.2s110 245.2 245.2 245.2 245.2-110 245.2-245.2zm-465.9 0c0-121.7 99-220.7 220.7-220.7s220.7 99 220.7 220.7-99 220.7-220.7 220.7-220.7-99-220.7-220.7z"/>
    <path d="M253.9 360.4l68.9-68.9c4.8-4.8 4.8-12.5 0-17.3s-12.5-4.8-17.3 0l-48 48V138.7c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l68.9 68.9c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.1 8.7-3.5z"/>
  </svg>
  <span class="Button-text">Download</span>
</button>

<button class="Button Button--outlinePrimary Button--withIcon">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 490.4 490.4" class="Button-icon">
    <path d="M490.4 245.2C490.4 110 380.4 0 245.2 0S0 110 0 245.2s110 245.2 245.2 245.2 245.2-110 245.2-245.2zm-465.9 0c0-121.7 99-220.7 220.7-220.7s220.7 99 220.7 220.7-99 220.7-220.7 220.7-220.7-99-220.7-220.7z"/>
    <path d="M253.9 360.4l68.9-68.9c4.8-4.8 4.8-12.5 0-17.3s-12.5-4.8-17.3 0l-48 48V138.7c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l68.9 68.9c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.1 8.7-3.5z"/>
  </svg>
  <span class="Button-text">Print Auth Letter and Instruction</span>
</button>

{% endexample %}
