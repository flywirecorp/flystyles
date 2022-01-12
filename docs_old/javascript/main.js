//
//  Global
//

// Closest polyfill
if (!Element.prototype.matches)
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };

// Main nav
document
  .querySelector('[data-js="mobile-menu"]')
  .addEventListener("change", function(e) {
    console.log(e.target.value);
    window.location.href = e.target.value;
  });

// Add `has-value` and `is-focused` clases to FormGroup
var formFields = Array.prototype.slice.call(
  document.querySelectorAll(
    ".FormGroup .Input, .FormGroup .Select, .FormGroup .Textarea, .FormGroup .Autocomplete-search"
  )
);

formFields.forEach(addFillClass);

formFields.forEach(function(element) {
  element.addEventListener("keyup", function(e) {
    addFillClass(e.target);
  });
  element.addEventListener("focus", function(e) {
    element.closest(".FormGroup").classList.add("is-focused");
    element.classList.add("is-focused");
  });
  element.addEventListener("blur", function(e) {
    element.closest(".FormGroup").classList.remove("is-focused");
    element.classList.remove("is-focused");
  });
});

function addFillClass(element) {
  if (element.value) {
    element.closest(".FormGroup").classList.add("has-value");
    element.classList.add("has-value");
  } else {
    element.closest(".FormGroup").classList.remove("has-value");
    element.classList.remove("has-value");
  }
}

// Simulate accordion behaviour
var accordionTriggers = Array.prototype.slice.call(
  document.querySelectorAll('[data-js="accordion-trigger"]')
);

if (accordionTriggers.length) {
  accordionTriggers.forEach(function(element) {
    element.addEventListener("click", function(e) {
      var section = e.target;

      accordionTriggers.forEach(function(element) {
        element.closest(".Accordion-section").classList.remove("is-active");
      });

      section.closest(".Accordion-section").classList.add("is-active");
    });
  });
}
