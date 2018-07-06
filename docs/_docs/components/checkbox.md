---
title: Checkbox
description: Custom checkbox
category: components
file: components/FormElements/Checkbox
---

##### Default checkbox

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Checkbox">
    <input class="Checkbox-input" name="cb-default" type="checkbox" />
    <span class="Checkbox-label">This is a custom checkbox with a long text to see the behaviour with multiple lines</span>
  </label>
</div>

{% endexample %}

##### Disabled checkbox

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Checkbox">
    <input class="Checkbox-input" disabled name="cb-disabled" type="checkbox" />
    <span class="Checkbox-label">This is a disabled checkbox</span>
  </label>
</div>
{% endexample %}

##### Checked disabled checkbox

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Checkbox">
    <input class="Checkbox-input" disabled checked name="cb-disabledchecked" type="checkbox" />
    <span class="Checkbox-label">This is a checked disabled checkbox</span>
  </label>
</div>
{% endexample %}

##### Error checkbox

{% example html %}

<div class="FormGroup has-error marginBottom-0">
  <label class="Checkbox">
    <input class="Checkbox-input" name="cb-error" type="checkbox" />
    <span class="Checkbox-label">This is a custom checkbox with error</span>
  </label>
  <p class="FormGroup-feedback">This is an error</p>
</div>
{% endexample %}

##### Multiple checkboxes

{% example html %}

<div class="GridRow GridRow--fromMedium-2">

  <div class="GridColumn FormGroup MultipleCheckbox fromMedium-marginBottom-0">
    <h6>Multiple choices:</h6>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cb-1" type="checkbox" />
      <span class="Checkbox-label">Javascript</span>
    </label>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cb-2" type="checkbox" />
      <span class="Checkbox-label">Python</span>
    </label>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cb-3" type="checkbox" />
      <span class="Checkbox-label">PHP</span>
    </label>
  </div>

  <div class="GridColumn FormGroup has-error MultipleCheckbox marginBottom-0">
    <h6>Select with errors:</h6>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cbe-1" type="checkbox" />
      <span class="Checkbox-label">Javascript</span>
    </label>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cbe-2" type="checkbox" />
      <span class="Checkbox-label">Python</span>
    </label>
    <label class="Checkbox">
      <input class="Checkbox-input" name="cbe-3" type="checkbox" />
      <span class="Checkbox-label">PHP</span>
    </label>
    <p class="FormGroup-feedback">Please select at least one option.</p>
  </div>

</div>
{% endexample %}
