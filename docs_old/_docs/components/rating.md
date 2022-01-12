---
title: Rating
description: Star rating
category: components
file: components/Rating/Rating.scss
---

{% example html %}
<div class="Rating">
  <span class="textAlign-center fontSize-sm">
    Very bad
  </span>
  <div class="Rating-stars">
    <span data-value="5" class="Star">☆</span>
    <span data-value="4" class="Star">☆</span>
    <span data-value="3" class="Star">☆</span>
    <span data-value="2" class="Star">☆</span>
    <span data-value="1" class="Star">☆</span>
  </div>
  <span class="textAlign-center fontSize-sm">
    Very good
  </span>
</div>
<div class="Rating Rating-huge marginTop-lg">
  <div class="Rating-items">
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="1"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="2"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="3"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="4"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="5"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="6"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="7"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="8"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="9"/>
      <span class="Rating-value"></span>
    </label>
    <label class="Rating-label">
      <input type="radio" class="Rating-input" name="rating" value="10"/>
      <span class="Rating-value"></span>
    </label>
  </div>
  <div class="Rating-hints">
    <span class="Rating-hint">
      Not likely
    </span>
    <span class="Rating-hint">
      Very good
    </span>
  </div>
</div>
{% endexample %}
