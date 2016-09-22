# Flystyles

## Installation

The project can be installed via Bower, npm or rails indicating the git repository and the release (tag/version).
The repository is private, so you will need a ssh key and permissions to see the repository.

#### bower

```bash
bower install git@github.com:peertransfer/flystyles.git#0.0.1
```

#### npm
```bash
npm install git+ssh@github.com:peertransfer/flystyles.git#v0.0.1
```

#### rails

The project has a gem, so just include in Gemfile

```bash
gem 'flystyles', git: 'https://github.com/peertransfer/flystyles.git'
```
and execute `bundle`.

## Build commands

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

## Documentation

All components in flysyles are documented in `/docs` folder. The styleguide is created with Jekyll.

### Installation

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

### Working

#### Styleguide Driven Development

Styleguide Driven Development (SDD) is a practice that encourages the separation of UX, Design & Frontend from Backend concerns. This is achieved by developing the UI separately in a styleguide.

By separating the UI and backend tasks so they don’t rely on each other, it allows teams to iterate fast on prototypes and designs without having to make changes to the backend. With careful planning they should plug-and-play together nicely.

#### Creating new components

To document a new component, a new markdown file has to be added to `src/_docs/components`. This file has a [Front Matter](https://jekyllrb.com/docs/frontmatter/) where you have to specify the category and the name of the component:

```
---
title: Buttons
description:
category: components
---
```

#### Browser Sync

To help in developing workflow, a Browser Sync is provided that watch local changes and refresh the browser. That way, when we need a new component, It can be created directly in the styleguide that gets the styles from Flystyles, achieving the Styleguide Driven Development (SDD).

To run the server, execute in `/docs` folder:

```bash
npm install
npm run serve
```

#### Deploy

For the moment, the project is hosted on Netlifly [flystyles.netlify.com](http://flystyles.netlify.com/). To deploy the build files, you have to create an account in Netlifly, install `netlify-cli` and deploy:

```bash
npm install netlify-cli -g
cd docs/
netlify deploy dist
```
