---
layout: full
title: "Framework"
order: 2
---

## Flywire Frontend Framework

Provisional repository: https://github.com/peertransfer/flystyles

### Installation

The project can be installed via Bower or npm indicating the git repository and the release (tag/version).

The repository is private, so you will need a ssh key and permissions to see the repository.

##### bower

```bash
bower install git@github.com:peertransfer/flystyles.git#0.0.1
```

##### npm
```bash
npm install git+ssh@github.com:peertransfer/flystyles.git#v0.0.1
```

##### rails

The project has a gem, so just include in Gemfile

```bash
gem 'flystyles', git: 'https://github.com/peertransfer/flystyles.git'
```

### Build commands

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

### Architecture

```
scss/
|
|
|– inc/
|   |– _settings.scss     # Default variables
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
 – main.scss              # Main Sass file

```

Files follow the same naming conventions described above: they are hyphen-delimited.

#### BASE FOLDER

The base/ folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call _base.scss).

```
_base.scss
_reset.scss
_typography.scss
_animations.scss

```


#### COMPONENTS FOLDER

For smaller components, there is the components/ folder. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.

```
_media.scss
_carousel.scss
_thumbnails.scss
```

#### INC FOLDER

The `inc/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here. This files dont's produce any output.

```
_settings.scss
_responsive.mixins.scss
_typography.mixins.scss
```

#### THEMES FOLDER

Custom theme specific styles.

```
_theme.scss
_admin.scss
```

#### UTILITIES FOLDER

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of a component. As a result, once a class is in significant use great care should be taken when introducing any modifications to it.

Utilities make use of `!important` to ensure that their styles always apply ahead of those defined in a component's dedicated CSS.

```
_spacing.scss
_responsive.scss
```


#### MAIN FILE `main.scss`

The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments.
