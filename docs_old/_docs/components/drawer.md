---
title: Drawer
description:
category: components
file: components/Drawer
---

Drawer window allowing inside content

{% example html %}
<div class="Drawer isHidden" aria-modal tabIndex="-1" role="dialog">
  <div class="Drawer-overlay"></div>
  <aside class="Drawer-content" role="document">
    <button class="Drawer-close" aria-label="Close">
      <span class="Icon Icon--close Icon--xs margin-0"></span>
    </button>
    <div>
      <p>Drawer content</p>
    </div>
  </aside>
</div>
{% endexample %}
