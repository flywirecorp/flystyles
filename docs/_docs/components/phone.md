---
title: Phone Number
description:
category: components
file: components/FormElements/PhoneNumber.scss
---

Special component for typing a Telephone Number. This component is created by a mix of multiple components (FormGroup, Input, Autocomplete, and Flag).

__Requires:__ `FormGroup`, `Input`, `Autocomplete`.

#### Phone Number Input closed
{% example html %}
<div class="PhoneNumber">
  <div class="FormGroup">
    <label class="Label" for="tel">Default label</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'>
         +1684
        </span>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel" type="text" class="Input PhoneNumber-input-inner" />
      </div>
    </div>
  </div>
</div>

<div class="PhoneNumber">
  <div class="FormGroup">
    <label class="Label" for="tel2">Default label</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'></span>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel2" type="text" class="Input PhoneNumber-input-inner" />
      </div>
    </div>
  </div>
</div>

<div class="PhoneNumber">
  <div class="FormGroup FormGroup--floatingLabel">
    <label class="Label" for="tel3">Floating label</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'>
          +36
        </span>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel3" type="text" class="Input PhoneNumber-input-inner" />
      </div>
    </div>
  </div>
</div>
{% endexample %}

#### Phone Number Input opened


{% example html %}
<div class="FormGroup PhoneNumber">
  <label class="Label" for="tel4">Mobile phone</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete is-searching PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'>
          +86
        </span>
        <ul class='Autocomplete-options PhoneNumber-menu-options'>
          <li class='Autocomplete-option PhoneNumber-option'>
            <span class='PhoneNumber-option-country'>China (中国)</span>
            <span class='PhoneNumber-option-dial'>+86</span>
          </li>
          <li class='Autocomplete-option PhoneNumber-option is-active'>
            <span class='PhoneNumber-option-country'>Spain (España)</span>
            <span class='PhoneNumber-option-dial'>+34</span>
          </li>
          <li class='Autocomplete-option PhoneNumber-option'>
            <span class='PhoneNumber-option-country'>United States</span>
            <span class='PhoneNumber-option-dial'>+1</span>
          </li>
        </ul>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel4" type="text" class="Input PhoneNumber-input-inner" />
      </div>
    </div>  
</div>

{% endexample %}

#### Phone Input Disabled
{% example html %}
<div class="PhoneNumber">
  <div class="FormGroup FormGroup--floatingLabel is-disabled">
    <label class="Label" for="tel5">Floating label</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'>
          +86 
        </span>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel5" type="text" class="Input PhoneNumber-input-inner" disabled />
      </div>
    </div>
  </div>
</div>
{% endexample %}

#### Phone Input Read Only
{% example html %}
<div class="PhoneNumber">
  <div class="FormGroup FormGroup--floatingLabel is-readOnly">
    <label class="Label" for="tel6">Floating label</label>
    <div class="PhoneNumber-field">
      <div class='Autocomplete PhoneNumber-menu'>
        <span class='Autocomplete-search PhoneNumber-menu-input'>
          +86
        </span>
      </div>
      <div class="PhoneNumber-input">
        <input id="tel6" type="text" class="Input PhoneNumber-input-inner" readonly value="111111111" />
      </div>
    </div>
  </div>
</div>
{% endexample %}
