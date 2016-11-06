---
title: Form Elements
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
  <fieldset class="FormGroup">
    <legend>Radio buttons</legend>
    <div class="form-check">
      <label class="Label" class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that&mdash;be sure to include why it's great
      </label>
    </div>
    <div class="form-check">
    <label class="Label" class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two can be something else and selecting it will deselect option one
      </label>
    </div>
    <div class="form-check disabled">
    <label class="Label" class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </div>
  </fieldset>
  <div class="form-check">
    <label class="Label" class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="Button Button--primary">Submit</button>
</form>
{% endexample %}

##### Input sizes

Set heights using classes like `.Input--{size}`. Combine with `fontSize-{size}` utils to have a better results.

{% example html %}
<div class='FormGroup'>
  <label class='Label fontSize-xs'>Extra small input</label>
  <input type='text' class='Input Input--xs' placeholder='extra-small input'/>
</div>

<div class='FormGroup'>
  <label class='Label fontSize-sm'>Small input</label>
  <input type='email' class='Input Input--sm' placeholder='small input'/>
</div>

<div class='FormGroup'>
  <label class='Label'>Medium input field</label>
  <input type='number' class='Input Input--md' placeholder='medium input'/>
</div>

<div class='FormGroup'>
  <label class='Label fontSize-lg'>Large Select</label>
  <select class="Select Select--lg" id="exampleSelect1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>

<div class='FormGroup'>
  <label class='Label fontSize-xl'>Extra large field</label>
  <input type='text' class='Input Input--xl' placeholder='extra-large input'/>
</div>
{% endexample %}


#### Validation

Flystyles includes validation styles for danger, warning, and success states on form controls.

{% example html %}

<div class="FormGroup has-success">
  <label class="Label" for="inputSuccess1">Input with success</label>
  <input type="text" class="Input Input--success" id="inputSuccess1">
  <p class="FormGroup-feedback FormGroup-feedback--success">Success! You've done it.</p>
  <p class="FormGroup-hint">Example help text that remains unchanged.</p>
</div>

<div class="FormGroup has-error">
  <label class="Label" for="inputError1">Input with danger</label>
  <input type="text" class="Input Input--error" id="inputError1">
  <p class="FormGroup-feedback FormGroup-feedback--error">Sorry, that username's taken. Try another?</p>
  <p class="FormGroup-hint">Example help text that remains unchanged.</p>
</div>

{% endexample %}
