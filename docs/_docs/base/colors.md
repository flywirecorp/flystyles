---
title: Colors
category: base
description: All colors used in Flywire's apps
file: _config.scss
colors:
  brand:
    - name: Primary
      variable: $color-brand-primary
      color: "#0084c0"
    - name: Secondary
      variable: $color-brand-secondary
      color: "#48B985"
    - name: Tertiary
      variable: $color-brand-tertiary
      color: "#0f476b"
    - name: Quaternary
      variable: $color-brand-quaternary
      color: "#017043"

  ui:
    - name: Success Light
      variable: $color-success-light
      color: "#b0f7cf"
      light: true
    - name: Success
      variable: $color-success
      color: "#00ca71"
    - name: Success Dark
      variable: $color-success-dark
      color: "#33a06c"

    - name: Warning Light
      variable: $color-warning-light
      color: "#ffebc1"
      light: true
    - name: Warning
      variable: $color-warning
      color: "#fbd53a"
    - name: Warning Dark
      variable: $color-warning-dark
      color: "#ffbb2f"

    - name: Danger Light
      variable: $color-danger-light
      color: "#ffd8db"
      light: true
    - name: Danger
      variable: $color-danger
      color: "#d63442"
    - name: Danger Dark
      variable: $color-danger-dark
      color: "#c01423"

    - name: Info Light
      variable: $color-info-light
      color: "#cee6ff"
      light: true
    - name: Info
      variable: $color-info
      color: "#3497ff"
    - name: Info Dark
      variable: $color-info-dark
      color: "#0069d7"

    - name: Highlight Light
      variable: $color-highlight-light
      color: "#d7d1f3"
      light: true
    - name: Highlight
      variable: $color-highlight
      color: "#aa9ce5"
    - name: Highlight Dark
      variable: $color-highlight-dark
      color: "#7860db"

  grayscale:
    - name: Gray Lighter
      variable: $color-gray-lighter
      color: "#f8fafd"
      light: true
    - name: Gray Light
      variable: $color-gray-light
      color: "#e7eff7"
      light: true
    - name: Gray
      variable: $color-gray
      color: "#dae4ef"
      light: true
    - name: Gray Dark
      variable: $color-gray-dark
      color: "#c3cfdd"
      light: true

  asphalt:
    - name: Asphalt Lighter
      variable: $color-asphalt-lighter
      color: "#96a7b9"
    - name: Asphalt Light
      variable: $color-asphalt-light
      color: "#576a7e"
    - name: Asphalt
      variable: $color-asphalt
      color: "#38495b"
    - name: Asphalt Dark
      variable: $color-asphalt-dark
      color: "#1f2d3d"
---

##### Brand Colors
Primary brand colors are used for elements that must reflect Flywire's brand. Each color has a darker and a lighter shade.

<div class="blockGrid--4cols">
{% for color in page.colors.brand %}
  {% include color.html color=color %}
{% endfor %}
</div>

##### UI Colors

The main UI colors are used for action buttons, alert messages, and form elements. Input fields, for example, can get positive and negative feedback, whereas alert messages can have warning feedback.

<div class="blockGrid--3cols">
{% for color in page.colors.ui %}
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

##### Asphalt Colors
Asphalt (blue-greyish colors) colors are used for text, backgrounds, lines and borders. Smoke and Snow have two darker shades, which are used for icons and backgrounds.

<div class="blockGrid--4cols">
{% for color in page.colors.asphalt %}
  {% include color.html color=color %}
{% endfor %}
</div>
