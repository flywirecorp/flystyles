---
title: FileInput
description:
category: components
file: components/FileInput
---

Input for uploading files

{% example html %}
<div class="FileInput">
  <input type="file" accept=".png, .jpg" data-qa="fileInput">
  <p class="FileInput-hint" data-qa="hint">
    This is the hint content
  </p>
  <button class="FileInput-submit" data-qa="submitButton">
    Upload a file
  </button>
</div>

<div class="FileInput">
  <input type="file" accept=".png, .jpg" data-qa="fileInput">
  <p class="FileInput-hint" data-qa="hint"></p>
  <button class="FileInput-submit FileInput--uploading" disabled data-qa="submitButton">
    Upload a file
  </button>
</div>
{% endexample %}
