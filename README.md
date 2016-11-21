# Flystyles

## Installation

The project can be installed via npm or yarn.


### npm
```bash
npm install flystyles
```

### yarn
```bash
yarn add flystyles
```


# Build commands

A compiled version of the CSS is provided in `/dist` folder.
To compile a new version:

Install dependencies:

```bash
npm install
```

Compile CSS:

```bash
npm run build
```

# Documentation

All components in flysyles are documented in `/docs` folder. The styleguide is created with Jekyll.

## Installation

Docs are made using [Jekyll](https://jekyllrb.com/).
To install Jekyll:

```bash
bundle install
```

To create the build files (in `_site` folder) execute:

```bash
bundle exec jekyll build
```

To launch jekyll local server:

```bash
bundle exec jekyll serve
```

## Working

### Styleguide Driven Development

Styleguide Driven Development (SDD) is a practice that encourages the separation of UX, Design & Frontend from Backend concerns. This is achieved by developing the UI separately in a styleguide.

By separating the UI and backend tasks so they don’t rely on each other, it allows teams to iterate fast on prototypes and designs without having to make changes to the backend. With careful planning they should plug-and-play together nicely.

### Creating new components

To document a new component, a new markdown file has to be added to `src/_docs/components`. This file has a [Front Matter](https://jekyllrb.com/docs/frontmatter/) where you have to specify the category and the name of the component:

```
---
title: Buttons
description: Button component description
category: components
---
```

### Browser Sync

To help in developing workflow, a Browser Sync is provided that watch local changes and refresh the browser. That way, when we need a new component, It can be created directly in the styleguide that gets the styles from Flystyles, achieving the Styleguide Driven Development (SDD).

To run the server, execute:

```bash
npm install
npm run docs
```

#### Deploy

For the moment, the project is hosted on Netlifly [flystyles.netlify.com](http://flystyles.netlify.com/). The project is deployed whenever you push to master automatically.

#### Create a new version

To create a new version you have to use the npm command [version](https://docs.npmjs.com/cli/version). It will generate the new dist files, add a release tag and push to master.

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

## Architecture

```
src/
|
|- styles
|
|   – mixins/
|      |– _responsive.scss   # Responsive mixins
|      |– _typography.scss   # Typography mixins
|      …                     # Etc
|
|   – base/
|       |– _normalize.scss    # Reset/normalize
|       |– _typography.scss   # Typography rules
|       |- _animations.scss   # CSS Animations
|       …                     # Etc.
|
|   – utilities/
|       |– _spacing.scss      # Margins, paddings, ...
|       |– _responsive.scss   # Brakpoints visibility classes
|       …                     # Etc.
|
|- components/
|   |– Button/_Button.scss    # Buttons
|   |– Grid/_Grid.scss        # Grid
|   …                         # Etc.
|
|- _config.scss           # Flystyles variables
|– main.scss              # Main Sass file

```

Files follow the same naming conventions described above: they are hyphen-delimited.

### BASE FOLDER

The base/ folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call _base.scss).

```
_base.scss
_reset.scss
_typography.scss
_animations.scss

```


### COMPONENTS FOLDER

For smaller components, there is the components/ folder. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.

```
_media.scss
_carousel.scss
_thumbnails.scss
```

### MIXINS FOLDER

The `mixins/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here. This files dont's produce any output.

```
_responsive.scss
_typography.scss
```

### THEMES FOLDER

Custom theme specific styles.

```
_theme.scss
_admin.scss
```

### UTILITIES FOLDER

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of a component. As a result, once a class is in significant use great care should be taken when introducing any modifications to it.

Utilities make use of `!important` to ensure that their styles always apply ahead of those defined in a component's dedicated CSS.

```
_spacing.scss
_responsive.scss
```

### CONFIG FILE `_config.scss`

The configuration file where all variables are defined. Copy this file to override the Flystyles defaults without modifying key, versioned files.

### MAIN FILE `flystyles.scss`

The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments.
