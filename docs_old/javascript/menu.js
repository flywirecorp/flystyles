document
  .querySelector('[data-js="mobile-menu"]')
  .addEventListener("change", function(e) {
    console.log(e.target.value);
    window.location.href = e.target.value;
  });
