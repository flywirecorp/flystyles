---
title: Accordion
description: Drawer component to separete content in sections
category: components
file: components/Accordion
---

{% example html %}

  <div class="Accordion">
    <section class="Accordion-section has-success">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h3 class="Accordion-sectionTitle"><span class="paddingRight-xs">1.</span> This is the first step</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section is-active">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h3 class="Accordion-sectionTitle"><span class="paddingRight-xs">2.</span> This is the second section</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h3 class="Accordion-sectionTitle"><span class="paddingRight-xs">3.</span> This is the third section</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
  </div>

{% endexample %}
