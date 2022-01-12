---
title: Autocomplete
description:
category: components
file: components/Dropdow
---

Autocomplete component with autocomplete.

##### Autocomplete Closed

{% example html %}
<div class='Autocomplete'>
  <input type='text' class='Autocomplete-search' placeholder='Select one option...' />
  <ul class='Autocomplete-options'>
    <li><a href='#'>Opción 1</a></li>
    <li><a href='#'>Opción 1</a></li>
    <li><a href='#'>Opción 1</a></li>
  </ul>
</div>
{% endexample %}

##### Autocomplete Opened

{% example html %}
<div class='Autocomplete is-searching'>
  <input type='text' class='Autocomplete-search' placeholder='Select one option...' value='ción' />
  <ul class='Autocomplete-options'>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option is-active'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
  </ul>
</div>
{% endexample %}

##### Autocomplete Validation

{% example html %}
<div class='FormGroup has-error'>
  <label class='Label' for='dropdown-example-1'>This is a label</label>
  <div class='Autocomplete has-error'>
    <input id='dropdown-example-1' type='text' class='Autocomplete-search' placeholder='Select one option...' />
    <ul class='Autocomplete-options'>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    </ul>
  </div>
  <p class='FormGroup-feedback'>This field is required</p>
</div>

{% endexample %}


##### Autocomplete with search disabled

{% example html %}
<div class='FormGroup'>
  <label class='Label' for='dropdown-example-2'>This is a label</label>
  <div class='Autocomplete Autocomplete--searchDisabled'>
    <input id='dropdown-example-2' readonly type='text' class='Autocomplete-search' placeholder='Select one option...' />
  </div>
  <p class='FormGroup-feedback'>This field is required</p>
</div>

{% endexample %}
