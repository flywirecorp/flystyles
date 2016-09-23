---
layout: full
title: "Framework"
order: 2
---

# Flystyles

## Installation

The project can be installed via Bower, npm or rails indicating the git repository and the release (tag/version).
The repository is private, so you will need a ssh key and permissions to see the repository.

### bower

```bash
bower install git@github.com:peertransfer/flystyles.git#0.0.1
```

### npm
```bash
npm install git+ssh@github.com:peertransfer/flystyles.git#v0.0.1
```

### rails

The project has a gem, so just include in Gemfile

```bash
gem 'flystyles', git: 'https://github.com/peertransfer/flystyles.git'
```
and execute `bundle`.

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

First go to `/docs` folder and install jekyll:

```bash
bundle install
```

To create the build files (in `/dist` folder) execute:

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
description:
category: components
---
```

### Browser Sync

To help in developing workflow, a Browser Sync is provided that watch local changes and refresh the browser. That way, when we need a new component, It can be created directly in the styleguide that gets the styles from Flystyles, achieving the Styleguide Driven Development (SDD).

To run the server, execute in `/docs` folder:

```bash
npm install
npm run serve
```

### Deploy

For the moment, the project is hosted on Netlifly [flystyles.netlify.com](http://flystyles.netlify.com/). To deploy the build files, you have to create an account in Netlifly, install `netlify-cli` and deploy:

```bash
npm install netlify-cli -g
cd docs/
netlify deploy dist
```


## Architecture

```
scss/
|
|– mixins/
|   |– _responsive.scss   # Responsive mixins
|   |– _typography.scss   # Typography mixins
|   …                     # Etc
|
|– base/
|   |– _normalize.scss    # Reset/normalize
|   |– _typography.scss   # Typography rules
|   |- _animations.scss   # CSS Animations
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– utilities/
|   |– _spacing.scss      # Margins, paddings, ...
|   |– _responsive.scss   # Brakpoints visibility classes
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|
 - _config.scss           # Flystyles variables
 – main.scss              # Main Sass file

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
