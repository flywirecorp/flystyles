---
title: Dropdown
description:
category: components
file: components/Dropdow
---

Dropdown component with autocomplete.

##### Dropdown Closed

{% example html %}
<div class='Dropdown'>
  <input type='text' class='Dropdown-search' placeholder='Select one option...' />
  <ul class='Dropdown-options'>
    <li><a href='#'>Opción 1</a></li>
    <li><a href='#'>Opción 1</a></li>
    <li><a href='#'>Opción 1</a></li>
  </ul>
</div>
{% endexample %}

##### Dropdown Opened

{% example html %}
<div class='Dropdown is-searching'>
  <input type='text' class='Dropdown-search' placeholder='Select one option...' value='ción' />
  <ul class='Dropdown-options'>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option is-active'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
  </ul>
</div>
{% endexample %}

##### Dropdown Validation

{% example html %}
<div class='FormGroup has-error'>
  <label class='Label' for='drowpdown-example'>This is a label</label>
  <div class='Dropdown has-error'>
    <input id='drowdown-example' type='text' class='Dropdown-search' placeholder='Select one option...' />
    <ul class='Dropdown-options'>
      <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
      <li class='Dropdown-option'>Op<span class='is-highlighted'>ción</span> 1</li>
    </ul>
  </div>
  <p class='FormGroup-feedback'>This field is required</p>
</div>

{% endexample %}
