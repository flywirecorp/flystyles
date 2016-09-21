// Create a Browsersync instance
var bs = require("browser-sync").create();
var exec = require('child_process').exec;


// Listen to change events on HTML and reload
bs.watch("*.html").on("change", bs.reload);

// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
bs.watch("../**/*.scss", function(event, file) {

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
bs.watch(["./src/**/*.html", "./src/**/*.md"], function(event, file) {

  if (event === "change") {
    //bs.reload("*.css");
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
  server: "./dist"
});
