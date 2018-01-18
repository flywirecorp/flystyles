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
    <input type="email" class="Input" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" value="user@email.com" autocomplete="off" required />
    <label class="Label" for="exampleInputEmail2">Email address</label>
    <p id="emailHelp" class="FormGroup-hint">We'll never share your email with anyone else.</p>
  </div>

  <div style="width: 300px" class="FormGroup FormGroup--floatingLabel">
    <input type="email" class="Input" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email" value="user@email.com" autocomplete="off"/>
    <label title="This is a placeholder that does not fit inside their label" class="Label" for="exampleInputEmail3">This is a placeholder that does not fit inside their label</label>
  </div>

  <div class="FormGroup FormGroup--floatingLabel">
    <input type="password" class="Input" id="exampleInputPassword2" placeholder="Password" autocomplete="off" />
    <label class="Label" for="exampleInputPassword2">Password</label>
  </div>

  <div class="FormGroup FormGroup--floatingLabel has-error">
    <input type="email" class="Input" id="errorInput" />
    <label class="Label" for="errorInput">Enter your name</label>
    <p class="FormGroup-feedback">This is a required field</p>
  </div>

  <div class="FormGroup FormGroup--floatingLabel">
    <select class="Select" id="exampleSelect3" required>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <label class="Label" for="exampleSelect3">Example select</label>
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

  <div class="FormGroup FormGroup--floatingLabel FormGroup--hasPrefix">
    <label class="Label" for="prefixedInput5">Prefixed input</label>
    <div class="InputGroup">
      <span class="InputGroup-context">$</span>
      <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="prefixedInput5" required />
    </div>
  </div>

  <div class="FormGroup FormGroup--floatingLabel FormGroup--hasSuffix FormGroup--hasPrefix">
    <label class="Label" for="sufixedInput2">Prefixed and suffixed input</label>
    <div class="InputGroup">
      <span class="InputGroup-context">$</span>
      <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixedInput2" required />
      <span class="InputGroup-context">.00</span>
    </div>
  </div>
</form>
{% endexample %}

##### Disabled and Read Only Fields

{% example html %}

<form>
  <div class="FormGroup FormGroup--floatingLabel FormGroup--hasPrefix FormGroup--hasSuffix is-readOnly">
    <label class="Label" for="sufixedReadOnlyInput">Read only input group</label>
    <div class="InputGroup">
      <span class="InputGroup-context">$</span>
      <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixedReadOnlyInput" required readonly />
      <span class="InputGroup-context">.00</span>
    </div>
  </div>

  <div class='FormGroup FormGroup--floatingLabel is-readOnly'>
    <label class='Label' for='drowpdown-example-3'>Read only input autocomplete</label>
    <div class='Autocomplete'>
      <input id='drowdown-example-3' type='text' class='Autocomplete-search' placeholder='Select one option...' value="Spain" readonly />
    </div>
  </div>

  <div class="FormGroup FormGroup--floatingLabel is-readOnly">
    <input class="Input" id="exampleInputReadOnly" placeholder="you can't type here" autocomplete="off" readonly />
    <label class="Label" for="exampleInputReadOnly">Read only input</label>
  </div>

  <div class="FormGroup FormGroup--floatingLabel is-disabled">
    <input class="Input" id="exampleInputDisabled" placeholder="you can't type here" autocomplete="off" disabled  />
    <label class="Label" for="exampleInputDisabled">Disabled input</label>
  </div>

  <div class='FormGroup FormGroup--floatingLabel is-disabled'>
    <label class='Label' for='drowpdown-example-4'>Disabled input autocomplete</label>
    <div class='Autocomplete'>
      <input id='drowdown-example-4' type='text' class='Autocomplete-search' placeholder='Select one option...' value="Spain" disabled />
    </div>
  </div>

  <div class="FormGroup FormGroup--floatingLabel FormGroup--hasPrefix is-disabled">
    <label class="Label" for="sufixedDisabledInput">Disabled input group</label>
    <div class="InputGroup">
      <span class="InputGroup-context">$</span>
      <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixedDisabledInput" required disabled />
      <span class="InputGroup-context">.00</span>
    </div>
  </div>
</form>
{% endexample %}
