var ScrollSpy = (function() {
  'use strict';

  var sections = null;
  var navLinks = null;
  var SELECTED = 'is-selected';

  function getClosestSection() {
    console.log(sections);

    var sectionsLength = sections.length;

    for(var index=0; index<sectionsLength; index++) {
      if (isBelowScroll(sections.item(index)))
        break;
    }

    selectLink(sections.item(index).id);
  }

  function isBelowScroll(element) {
    var position = element.getBoundingClientRect();
    return position.top + 20 > 0;
  }

  function selectLink(id) {
    
    Array.prototype.forEach.call(navLinks, function(element){
      element.classList.remove(SELECTED);
    });

    var currentLink = document.querySelector('a[href="#'+id+'"]');
    if (currentLink) {
      currentLink.classList.add(SELECTED);
      // TODO: THIS IS HARDCODED, FIND REAL PARENT
      currentLink.parentNode.parentNode.parentNode.classList.add(SELECTED);
    }
  }

  function init(content, nav) {
    sections = content.querySelectorAll('[id]');
    navLinks = nav.querySelectorAll('a');

    console.log(sections.length, navLinks);

    window.addEventListener('scroll', function(event) {
      getClosestSection();
    });

    getClosestSection();
  }

  return init;

})();
