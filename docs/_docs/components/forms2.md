---
title: Forms 2.0
description: Form Element with Material Design like behaviour. Floating labels inside the input field.
category: components
file: components/FormElements/
---

#### Form example

{% example html %}
<form>

  <div class="FormGroup FormGroup--floatingLabel has-value">
    <input type="email" class="Input" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" value="user@email.com" autocomplete="off">
    <label class="Label" for="exampleInputEmail2">Email address</label>
    <p id="emailHelp" class="FormGroup-hint">We'll never share your email with anyone else.</p>
  </div>

  <div class="FormGroup FormGroup--floatingLabel">
    <input type="password" class="Input" id="exampleInputPassword2" placeholder="Password" autocomplete="off">
    <label class="Label" for="exampleInputPassword2">Password</label>
  </div>

  <div class="FormGroup FormGroup--floatingLabel has-error">
    <input type="email" class="Input" id="errorInput">
    <label class="Label" for="errorInput">Enter your name</label>
    <p class="FormGroup-feedback">This is a required field</p>
  </div>

  <div class="FormGroup FormGroup--floatingLabel">
    <select class="Select" id="exampleSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <label class="Label" for="exampleSelect2">Example select</label>
  </div>

  <div class="FormGroup FormGroup--floatingLabel">
    <label class="Label" for="exampleTextarea2">Example textarea</label>
    <textarea class="Textarea" id="exampleTextarea2" rows="3"></textarea>
  </div>

  <div class='FormGroup FormGroup--floatingLabel'>
    <label class='Label' for='drowpdown-example-2'>This is a label</label>
    <div class='Autocomplete'>
      <input id='drowdown-example-2' type='text' class='Autocomplete-search' placeholder='Select one option...' value="Spain" />
    </div>
  </div>

  <div class="FormGroup FormGroup--floatingLabel FormGroup--symbolFirst">
    <label class="Label" for="sufixedInput2">Prefixed and sufixed input</label>
    <div class="InputGroup">
      <span class="InputGroup-context">$</span>
      <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixedInput2" />
      <span class="InputGroup-context">.00</span>
    </div>
  </div>

</form>
{% endexample %}
