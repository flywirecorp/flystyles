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
  <label class='Label' for='drowpdown-example'>This is a label</label>
  <div class='Autocomplete has-error'>
    <input id='drowdown-example' type='text' class='Autocomplete-search' placeholder='Select one option...' />
    <ul class='Autocomplete-options'>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Autocomplete-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    </ul>
  </div>
  <p class='FormGroup-feedback'>This field is required</p>
</div>

{% endexample %}
