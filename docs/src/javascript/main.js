//
//  Docs Scripts
//

// Sticky Nav Component
var Sticky = (function() {
  'use strict';

  var CSS_CLASS_ACTIVE = 'is-fixed';

  var Sticky = {
    element: null,
    position: 0,
    addEvents: function() {
      window.addEventListener('scroll', this.onScroll.bind(this));
    },
    init: function(element) {
      this.element = element;
      this.addEvents();
      this.position = element.offsetTop ;
      this.onScroll();
    },
    aboveScroll: function() {
      console.log(this.position, window.scrollY);
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


//  Init Sticky Nav Bar
var sticky = document.querySelector('.sticky');
if (sticky)
  Sticky.init(sticky);
