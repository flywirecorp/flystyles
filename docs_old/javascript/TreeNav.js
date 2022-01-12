var TreeNav = (function() {
  'use strict';

  var SELECTED = 'is-selected';
  var SELECTORS = {
    PARENT_LINK: '.treeNav-parentLink',
    CHILD_LINK: '.treeNav-childLink'
  };

  // forEach method, could be shipped as part of an Object Literal/Module
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  var TreeNav = {
    parents: null,
    links: null,
    init: function(element) {
      if (! element)
        return false;

      this.element  = element;
      this.parents  = element.querySelectorAll(SELECTORS.PARENT_LINK);
      this.children = element.querySelectorAll(SELECTORS.CHILD_LINK);

      this.addEvents();
    },
    addEvents: function() {
      this.addParentLinksEvents();
      this.addChildrenLinksEvents();
    },
    addParentLinksEvents: function() {
      forEach(this.parents, function(index, element) {
        element.addEventListener('click', function(event) {
          event.preventDefault();
          var link = event.target;
          link.parentNode.classList.toggle(SELECTED);
        });
      });
    },
    addChildrenLinksEvents: function() {
      var selectChildrenLink = this.selectChildrenLink.bind(this);
      forEach(this.children, function(index, element) {
        element.addEventListener('click', function(event) {
          selectChildrenLink(event.target);
        });
      });
    },
    selectChildrenLink: function(element) {
      forEach(this.children, function(index, element) {
        element.classList.remove(SELECTED);
      });
      element.classList.add(SELECTED);
    }
  };

  return TreeNav;

})();
