var paths = {};
// Directory locations.
paths.assetsDir        = 'docs/';              // The files Gulp will handle.
paths.jekyllDir        = 'docs/';              // The files Jekyll will handle.
paths.jekyllAssetsDir  = 'docs/css/';          // The asset files Jekyll will handle.
paths.siteDir          = '_site/';            // The resulting static site.
paths.siteAssetsDir    = '_site/css/';        // The resulting static site's assets.

// Folder naming conventions.
// paths.postFolder   = '_posts';
// paths.fontFolder   = 'fonts';
paths.imageFolder  = 'images';
paths.scriptFolder = 'javascript';
paths.stylesFolder = '_scss';

// Asset files locations.
paths.sassFiles   = paths.assetsDir + paths.stylesFolder;
// paths.jsFiles     = paths.assetsDir + paths.scriptFolder;
// paths.imageFiles  = paths.assetsDir + paths.imageFolder;
// paths.fontFiles   = paths.assetsDir + paths.fontFolder;

// Jekyll files locations.
// paths.jekyllPostFiles  = paths.jekyllDir       + paths.postFolder;
paths.jekyllCssFiles   = paths.jekyllAssetsDir;
// paths.jekyllJsFiles    = paths.jekyllDir + paths.scriptFolder;
// paths.jekyllImageFiles = paths.jekyllDir + paths.imageFolder;
// paths.jekyllFontFiles  = paths.jekyllAssetsDir + paths.fontFolder;

// Site files locations.
paths.siteCssFiles   = paths.siteAssetsDir;
// paths.siteJsFiles    = paths.siteDir + paths.scriptFolder;
// paths.siteImageFiles = paths.siteDir + paths.imageFolder;
// paths.siteFontFiles  = paths.siteDir + paths.fontFolder;

// Glob patterns by file type.
// paths.sassPattern     = '/**/*.scss';
// paths.jsPattern       = '/**/*.js';
// paths.imagePattern    = '/**/*.+(jpg|jpeg|png|svg|gif|webp|tif)';
// paths.markdownPattern = '/**/*.+(md|MD|markdown|MARKDOWN)';
// paths.htmlPattern     = '/**/*.html';

// Asset files globs
// paths.sassFilesGlob  = paths.sassFiles  + paths.sassPattern;
// paths.jsFilesGlob    = paths.jsFiles    + paths.jsPattern;
// paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;

// Jekyll files globs
// paths.jekyllPostFilesGlob  = paths.jekyllPostFiles  + paths.markdownPattern;
// paths.jekyllHtmlFilesGlob  = paths.jekyllDir        + paths.htmlPattern;
// paths.jekyllImageFilesGlob = paths.jekyllImageFiles + paths.imagePattern;

// Site files globs
// paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;
module.exports = paths;