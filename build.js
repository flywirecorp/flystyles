const autoprefixer = require("autoprefixer");
const fs = require("fs");
const getDirName = require("path").dirname;
const mkdirp = require("mkdirp");
const postcss = require("postcss");
const sass = require("node-sass");

function buildDistFile(options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`Processing ${options.src}...`);

    const result = sass.renderSync({
      file: options.src,
    });

    mkdirp(getDirName(options.dest), function (err) {
      if (err) reject(err);

      postcss([autoprefixer()])
        .process(result.css)
        .then((result) => {
          fs.writeFile(options.dest, result.css, function (err) {
            if (err) reject(err);
            resolve();
          });
        });
    });
  });
}

Promise.all([
  ["flystyles", "utilities", "reboot"].forEach(function (filename) {
    buildDistFile({
      src: `./src/${filename}.scss`,
      dest: `./dist/${filename}.css`,
    });
  }),

  [
    "Alert",
    "Autocomplete",
    "Badge",
    "Button",
    "Calendar",
    "Checkbox",
    "Datepicker",
    "Dropdown",
    "FormGroup",
    "Icon",
    "Input",
    "InputGroup",
    "Label",
    "Modal",
    "PhoneNumber",
    "Radio",
    "Select",
    "Switch",
    "Textarea",
  ].forEach(function (component) {
    buildDistFile({
      src: `./src/components/${component}/${component}.scss`,
      dest: `./dist/components/${component}.css`,
    });
  }),
]).then(() => {
  console.log("Finished Building Flystyles!");
});
