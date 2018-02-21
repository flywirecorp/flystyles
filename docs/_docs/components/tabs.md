---
title: Tabs
description:
category: components
file: components/Tabs
---

Tab group allowing different tab content

{% example html %}

<div class="Tabs">
  <div class="TabList">
    <div class="Tab">
      <a class="Tab-link is-active">First Option</a>
      <div class="Tab-underline is-active"></div>
    </div>
    <div class="Tab">
      <a class="Tab-link">Second Option</a>
      <div class="Tab-underline"></div>
    </div>
    <div class="Tab">
      <a class="Tab-link is-disabled">Disabled Option</a>
      <div class="Tab-underline"></div>
    </div>
  </div>
  <div class="TabPanels">
    <div class="TabPanel">First option content</div>
  </div>
</div>

{% endexample %}
