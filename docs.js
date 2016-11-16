// Create a Browsersync instance
const bs = require("browser-sync").create();
const exec = require('child_process').exec;


// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
bs.watch("./**/*.scss", function(event, file) {

  if (event === "change") {
    //bs.reload("*.css");
    var build = exec('bundle exec jekyll build');

    build.stdout.on('data', function(data) {
      console.log(data);
      bs.reload("*.css");
    });

    build.stderr.on('data', function(data) {
      console.log(data);
    });

    build.on('close', function(code) {
      console.log(code);
    });
  }
});

// Provide a callback to capture ALL events to HTML
bs.watch(["./docs/**/*.html", "./docs/**/*.md"], function(event, file) {

  if (event === "change") {
    var build = exec('bundle exec jekyll build');

    build.stdout.on('data', function(data) {
      console.log(data);
      bs.reload();
    });

    build.stderr.on('data', function(data) {
      console.log(data);
    });

    build.on('close', function(code) {
      console.log(code);
    });
  }
});

// Now init the Browsersync server
bs.init({
  server: './_site'
});
