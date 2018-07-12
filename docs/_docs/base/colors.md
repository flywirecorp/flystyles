---
title: Colors
category: base
description: All colors used in Flywire's apps
file: _config.scss
colors:
  brand:
    - name: Primary Light
      variable: $color-brand-primary-light
      color: "#0090D2"
    - name: Primary
      variable: $color-brand-primary
      color: "#147BD1"
    - name: Primary Dark
      variable: $color-brand-primary-dark
      color: "#0F476B"

  ui:
    - name: Info
      variable: $color-info
      color: "#008bff"
    - name: Success
      variable: $color-success
      color: "#48b985"
    - name: Danger
      variable: $color-danger
      color: "#d63442"
    - name: Warning
      variable: $color-warning
      color: "#edc200"

  grayscale:
    - name: Gray Lighter
      variable: $color-gray-lighter
      color: "#eee"
      light: true
    - name: Gray Light
      variable: $color-gray-light
      color: "#ccc"
      light: true
    - name: Gray
      variable: $color-gray
      color: "#7A8FA2"
    - name: Gray Dark
      variable: $color-gray-dark
      color: "#666"
---

##### Brand Colors
Primary brand colors are used for elements that must reflect Flywire's brand. Each color has a darker and a lighter shade.

<div class="blockGrid--3cols">
{% for color in page.colors.brand %}
  {% include color.html color=color %}
{% endfor %}
</div>

##### Gray Colors
Gray colors are used for text, backgrounds, lines and borders. Smoke and Snow have two darker shades, which are used for icons and backgrounds.

<div class="blockGrid--4cols">
{% for color in page.colors.grayscale %}
  {% include color.html color=color %}
{% endfor %}
</div>


##### UI Colors

The main UI colors are used for action buttons, alert messages, and form elements. Input fields, for example, can get positive and negative feedback, whereas alert messages can have warning feedback.

<div class="blockGrid--4cols">
{% for color in page.colors.ui %}
  {% include color.html color=color %}
{% endfor %}
</div>
