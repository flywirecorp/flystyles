---
title: Colors
category: base
description: All colors used in Flywire's apps
colors:
  brand:
    - name: Primary Light
      variable: $color-branding-primary-light
      color: "#0090D2"
    - name: Primary
      variable: $color-branding-primary
      color: "#0084C0"
    - name: Primary Dark
      variable: $color-branding-primary-dark
      color: "#0F476B"

    - name: Secondary Light
      variable: $color-branding-secondary-light
      color: "#E9922F"
    - name: Secondary
      variable: $color-branding-secondary
      color: "#DB7909"
    - name: Secondary Dark
      variable: $color-branding-secondary-dark
      color: "#C36800"

    - name: Tertiary Light
      variable: $color-branding-tertiary-light
      color: "#48B985"
    - name: Tertiary
      variable: $color-branding-tertiary
      color: "#319B6A"
    - name: Tertiary Dark
      variable: $color-branding-tertiary-dark
      color: "#017043"                                                                  
---

### Brand Colors
Primary brand colors are used for elements that must reflect Flywire's brand. Each color has a darker and a lighter shade.

<div class="blockGrid--3cols">
{% for color in page.colors.brand %}
  {% include color.html color=color %}
{% endfor %}
</div>

### Grey Colors
Grey colors are used for text, backgrounds, lines and borders. Smoke and Snow have two darker shades, which are used for icons and backgrounds.

### UI Colors

The main UI colors are used for action buttons, alert messages, and form elements. Input fields, for example, can get positive and negative feedback, whereas alert messages can have warning feedback.
