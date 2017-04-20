// Create a Browsersync instance
const bs = require('browser-sync').create();
const exec = require('child_process').exec;
const buildPath = './_site';

// exec jekyll build for the first time
exec('bundle exec jekyll build', (error, stdout, stderr) => {
  if (error) {
    console.error(`${error}`);
    return;
  }
  console.log(`${stdout}`);
  console.log(`${stderr}`);

  // Now init the Browsersync server
  bs.init({
    server: buildPath
  });
});

// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
bs.watch('./**/*.scss', (event, file) => {

  if (event === 'change') {
    //bs.reload('*.css');
    const build = exec('bundle exec jekyll build');

    build.stdout.on('data', (data) => {
      console.log(data);
      bs.reload('*.css');
    });

    build.stderr.on('data', (data) => console.log(data));
  }
});

// Provide a callback to capture ALL events to HTML
bs.watch(['./docs/**/*.*'], (event, file) => {

  if (event === 'change') {
    const build = exec('bundle exec jekyll build');

    build.stdout.on('data', (data) => {
      console.log(data);
      bs.reload();
    });

    build.stderr.on('data', (data) => console.log(data));
  }
});
