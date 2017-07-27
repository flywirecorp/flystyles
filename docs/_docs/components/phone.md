---
title: Phone Number
description:
category: components
file: components/FormElements/PhoneNumber.scss
---

Special component for typing a Telephone Number. This component is created by a mix of multiple components (FormGroup, Input, Autocomplete, and Flag).

__Requires:__ `FormGroup`, `Input`, `Autocomplete`, `Flag`.

#### Phone Number Input closed
{% example html %}
<div class="FormGroup">
  <label class="Label" for="tel">Mobile phone</label>
  <div class="PhoneNumber">
    <div class='Autocomplete PhoneNumber-menu'>
      <span class='Autocomplete-search PhoneNumber-menu-input'>
        <span class='Flag Flag--es'></span>
      </span>
    </div>
    <div class="PhoneNumber-input">
      <input id="tel" type="text" class="Input PhoneNumber-input-inner" />
    </div>
  </div>
</div>
{% endexample %}

#### Phone Number Input opened


{% example html %}
<div class="FormGroup">
  <label class="Label" for="tel">Mobile phone</label>
  <div class="PhoneNumber">
    <div class='Autocomplete is-searching PhoneNumber-menu'>
      <span class='Autocomplete-search PhoneNumber-menu-input'>
        <span class='Flag Flag--es'></span>
      </span>
      <ul class='Autocomplete-options PhoneNumber-menu-options'>
        <li class='Autocomplete-option PhoneNumber-option'>
          <span class='Flag Flag--cn PhoneNumber-option-flag'></span>
          <span class='PhoneNumber-option-country'>China (中国)</span>
          <span class='PhoneNumber-option-dial'>+86</span>
        </li>
        <li class='Autocomplete-option PhoneNumber-option is-active'>
          <span class='Flag Flag--es PhoneNumber-option-flag'></span>
          <span class='PhoneNumber-option-country'>Spain (España)</span>
          <span class='PhoneNumber-option-dial'>+34</span>
        </li>
        <li class='Autocomplete-option PhoneNumber-option'>
          <span class='Flag Flag--us PhoneNumber-option-flag'></span>
          <span class='PhoneNumber-option-country'>United States</span>
          <span class='PhoneNumber-option-dial'>+1</span>
        </li>
      </ul>
    </div>
    <div class="PhoneNumber-input">
      <input id="tel" type="text" class="Input PhoneNumber-input-inner" />
    </div>
  </div>
</div>

{% endexample %}
