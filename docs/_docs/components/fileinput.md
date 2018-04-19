---
title: FileInput
description:
category: components
file: components/FileInput
---

Input for uploading files

{% example html %}
<div class="FileInput">
  <input type="file" accept="" data-qa="fileInput">
  <div class="FileInput-input">
    <button data-qa="browseButton">Browse</button>
    <span data-qa="fileName">Choose document</span>
  </div>
  <p class="FileInput-hint" data-qa="hint">This is the hint content</p>
  <button class="FileInput-submit" data-qa="submitButton">Upload</button>
</div>
{% endexample %}
