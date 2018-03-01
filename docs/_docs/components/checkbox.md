---
title: Checkbox
description: Custom checkbox
category: components
file: components/FormElements/Checkbox
---

##### Default checkbox

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Checkbox" for="cb-default">
    <input class="Checkbox-input" name="cb-default" id="cb-default" type="checkbox" />
    <span class="Checkbox-label">This is a custom checkbox with a long text to see the behaviour with multiple lines</span>
  </label>
</div>

{% endexample %}

##### Disabled checkbox

{% example html %}

<div class="FormGroup marginBottom-0">
  <label class="Checkbox" for="cb-disabled">
    <input class="Checkbox-input" disabled name="cb-disabled" id="cb-disabled" type="checkbox" />
    <span class="Checkbox-label">This is a disabled checkbox</span>
  </label>
</div>
{% endexample %}

##### Error checkbox

{% example html %}

<div class="FormGroup has-error marginBottom-0">
  <label class="Checkbox" for="cb-error">
    <input class="Checkbox-input" name="cb-error" id="cb-error" type="checkbox" />
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
    <label class="Checkbox" for="cb-1">
      <input class="Checkbox-input" name="cb-1" id="cb-1" type="checkbox" />
      <span class="Checkbox-label">Javascript</span>
    </label>
    <label class="Checkbox" for="cb-2">
      <input class="Checkbox-input" name="cb-2" id="cb-2" type="checkbox" />
      <span class="Checkbox-label">Python</span>
    </label>
    <label class="Checkbox" for="cb-3">
      <input class="Checkbox-input" name="cb-3" id="cb-3" type="checkbox" />
      <span class="Checkbox-label">PHP</span>
    </label>
  </div>

  <div class="GridColumn FormGroup has-error MultipleCheckbox marginBottom-0">
    <h6>Select with errors:</h6>
    <label class="Checkbox" for="cbe-1">
      <input class="Checkbox-input" name="cbe-1" id="cbe-1" type="checkbox" />
      <span class="Checkbox-label">Javascript</span>
    </label>
    <label class="Checkbox" for="cbe-2">
      <input class="Checkbox-input" name="cbe-2" id="cbe-2" type="checkbox" />
      <span class="Checkbox-label">Python</span>
    </label>
    <label class="Checkbox" for="cbe-3">
      <input class="Checkbox-input" name="cbe-3" id="cbe-3" type="checkbox" />
      <span class="Checkbox-label">PHP</span>
    </label>
    <p class="FormGroup-feedback">Please select at least one option.</p>
  </div>

</div>
{% endexample %}
