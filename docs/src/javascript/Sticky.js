var Sticky = (function() {
  'use strict';

  var CSS_CLASS_ACTIVE = 'is-fixed';

  var Sticky = {
    element: null,
    position: 0,
    init: function(element) {
      if (! element)
        return false;

      this.element = element;
      this.addEvents();
      this.position = element.offsetTop;
      this.onScroll();
    },
    addEvents: function() {
      window.addEventListener('scroll', this.onScroll.bind(this));
    },
    aboveScroll: function() {
      return this.position < window.scrollY;
    },
    onScroll: function(event) {
      if (this.aboveScroll()) {
        this.setFixed();
      } else {
        this.setStatic();
      }
    },
    setFixed: function() {
      this.element.classList.add(CSS_CLASS_ACTIVE);
    },
    setStatic: function() {
      this.element.classList.remove(CSS_CLASS_ACTIVE);
    }
  };

  return Sticky;

})();
