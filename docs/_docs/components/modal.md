---
title: Modal
description:
category: components
file: components/Modal
---

Modal window allowing inside content

{% example html %}
<div class="Modal Modal--small" tabIndex="-1" role="dialog" data-modal>
  <div class="Modal-dialog">
    <button class="Modal-closeButton" type="button" aria-label="Close">
      <span class="Icon Icon--close Icon--xs margin-0"></span>
    </button>
    <div class="Modal-content" role="document">
      <div>Modal content</div>
    </div>
  </div>
</div>
{% endexample %}
