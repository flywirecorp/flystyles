---
title: Forms
description: Inputs, Labels, Selects, ...
category: components
file: components/FormElements/
---

#### Form example

{% example html %}
<form>
  <div class="FormGroup">
    <label class="Label" for="exampleInputEmail1">Email address</label>
    <input type="email" class="Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <p id="emailHelp" class="FormGroup-hint">We'll never share your email with anyone else.</p>
  </div>
  <div class="FormGroup">
    <label class="Label" for="exampleInputPassword1">Password</label>
    <input type="password" class="Input" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="FormGroup">
    <label class="Label" for="exampleSelect1">Example select</label>
    <select class="Select" id="exampleSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="FormGroup">
    <label class="Label" for="exampleSelect2">Example multiple select</label>
    <select multiple class="Select Select--multiple" id="exampleSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="FormGroup">
    <label class="Label" for="exampleTextarea">Example textarea</label>
    <textarea class="Textarea" id="exampleTextarea" rows="3"></textarea>
  </div>
  <button type="submit" class="Button Button--primary">Submit</button>
</form>
{% endexample %}

##### Readonly & disabled fields
{% example html %}
<div class='FormGroup'>
  <label class='Label'>Read only input</label>
  <input type='text' class='Input' value='This is the value' readonly />
</div>

<div class='FormGroup'>
  <label class='Label'>Disabled input</label>
  <input type='text' class='Input' value='This is the value' disabled />
</div>
{% endexample %}

#### Validation
Flystyles includes validation styles for danger, warning, and success states on form controls.
These styles can be applied either by adding the class `has-error` or `has-success` to the parent `FormGroup`, or adding to the child form element the variation `--error` or `--success`.

{% example html %}

<div class="FormGroup has-success">
  <label class="Label" for="inputSuccess1">Input with success</label>
  <input type="text" class="Input Input--success" id="inputSuccess1">
  <p class="FormGroup-feedback FormGroup-feedback--success">Success! You've done it.</p>
  <p class="FormGroup-hint">Example help text that remains unchanged.</p>
</div>

<div class="FormGroup has-error">
  <label class="Label" for="inputError1">Input with error</label>
  <input type="text" class="Input Input--error" id="inputError1">
  <p class="FormGroup-feedback FormGroup-feedback--error">Sorry, that username's taken. Try another?</p>
  <p class="FormGroup-hint">Example help text that remains unchanged.</p>
</div>

<div class="FormGroup has-error">
  <label class="Label" for="textAreaError">Textarea with error</label>
  <textarea class="Textarea" id="textAreaError">
  </textarea>
</div>

<div class="FormGroup has-error">
  <label class="Label" for="selectError">Select with error</label>
  <select class="Select" id="selectError">
    <option>Option 1</option>
  </select>
</div>

{% endexample %}


#### Input groups

Easily extend form controls by adding text, buttons, or button groups on either side of textual `<input>`s.

{% example html %}

<div class="FormGroup">
  <label class="Label" for="prefixed">Input with prefix</label>
  <div class="InputGroup">
    <span class="InputGroup-context">http://</span>
    <input type="url" class="Input InputGroup-input" placeholder="Enter your website" id="prefixed" />
  </div>
</div>

<div class="FormGroup">
  <label class="Label" for="sufixed">Input with sufix</label>
  <div class="InputGroup">
    <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixed" />
    <span class="InputGroup-context">@flywire.com</span>
  </div>
</div>

<div class="FormGroup">
  <label class="Label" for="sufixed2">Prefixed and sufixed input</label>
  <div class="InputGroup">
    <span class="InputGroup-context">$</span>
    <input type="mail" class="Input InputGroup-input" placeholder="Enter your email" id="sufixed2" />
    <span class="InputGroup-context">.00</span>
  </div>
</div>

<div class="FormGroup">
  <label class="Label" for="sufixed">Input with sufix</label>
  <div class="InputGroup">
    <input type="mail" class="Input Input--xl InputGroup-input" placeholder="Enter your email" id="sufixed" />
    <span class="InputGroup-context fontSize-lg">@flywire.com</span>
  </div>
</div>
{% endexample %}
