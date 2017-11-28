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
        <h3 class="Accordion-sectionTitle">1. This is the first step</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section is-active">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h3 class="Accordion-sectionTitle">2. This is the second section</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h3 class="Accordion-sectionTitle">3. This is the third section</h3>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
  </div>

{% endexample %}
