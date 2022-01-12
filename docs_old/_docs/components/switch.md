---
title: Switch
description: Custom switch
category: components
file: components/FormElements/Switch
---

##### Default switch

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Switch">
    <input class="Switch-input" name="cb-default" type="checkbox" />
    <span class="Switch-label">This is a custom checkbox with a long text to see the behaviour with multiple lines</span>
  </label>
</div>

{% endexample %}

##### Disabled switch

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Switch">
    <input class="Switch-input" disabled name="cb-disabled" type="checkbox" />
    <span class="Switch-label">This is a disabled checkbox</span>
  </label>
</div>
{% endexample %}

##### Checked disabled switch

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Switch">
    <input class="Switch-input" disabled checked name="cb-disabledchecked" type="checkbox" />
    <span class="Switch-label">This is a checked disabled checkbox</span>
  </label>
</div>
{% endexample %}


##### Multiple switchees

{% example html %}

<div class="GridRow GridRow--fromMedium-2">
  <div class="GridColumn FormGroup MultipleCheckbox fromMedium-marginBottom-0">
    <h6>Multiple choices:</h6>
    <label class="Switch">
      <input class="Switch-input" name="cb-1" type="checkbox" />
      <span class="Switch-label">Javascript</span>
    </label>
    <label class="Switch">
      <input class="Switch-input" name="cb-2" type="checkbox" />
      <span class="Switch-label">Python</span>
    </label>
    <label class="Switch">
      <input class="Switch-input" name="cb-3" type="checkbox" />
      <span class="Switch-label">PHP</span>
    </label>
  </div>
</div>
{% endexample %}
