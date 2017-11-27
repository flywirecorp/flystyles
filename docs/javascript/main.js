//
//  Global
//

document
  .querySelector('[data-js="mobile-menu"]')
  .addEventListener("change", function(e) {
    console.log(e.target.value);
    window.location.href = e.target.value;
  });

var formFields = Array.from(
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
