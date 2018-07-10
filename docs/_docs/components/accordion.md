---
title: Accordion
description: Drawer component to separate content in sections
category: components
file: components/Accordion
---

{% example html %}

  <div class="Accordion">
    <section class="Accordion-section has-success">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h5 class="display-inlineFlex marginBottom-0"><span class="paddingRight-xs">1.</span> This is the first step</h5>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section is-active">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h5 class="display-inlineFlex marginBottom-0"><span class="paddingRight-xs">2.</span> This is the second section</h5>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
    <section class="Accordion-section">
      <header class="Accordion-sectionHeader" data-js="accordion-trigger">
        <h5 class="display-inlineFlex marginBottom-0"><span class="paddingRight-xs">3.</span> This is the third section</h5>
      </header>
      <div class="Accordion-sectionContentWrapper">
        <div class="Accordion-sectionContent">
          This is content.
        </div>
      </div>
    </section>
  </div>

{% endexample %}
