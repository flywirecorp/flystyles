---
layout: full
title: "Principles"
order: 3
---

# Frontent principles

This principles are strongly based on Nicolas Gallagher [SUIT CSS framework](https://github.com/suitcss/suit).


Large web applications generally have a lot of CSS files and often have many developers working on those files simultaneously, developers need a CSS architecture that is maintainable, manageable, and scalable. This is the key to follow a component-based architecture in our CSS.

A component-based system allows for the implementation and composition of loosely coupled, independent units into well-defined composite objects. Components are encapsulated but are able to interoperate via interfaces/events.

### Modularity

Each component should have a single focus and contain everything necessary to realise a specific part of the UI. Components may contain HTML, CSS, JavaScript, and associated assets without making assumptions about the outer rendering context.



### Composable and configurable

Composability is concerned with the inter-relationships of components. Composable systems have components that can be assembled in various combinations, as required.

Configuration is done via variables that are provided and used by components.


### Loose coupling

Components should not directly modify the presentation or behaviour of their dependencies. Relying on interfaces and events for inter-component communication results in a loose coupling.

Attempting to reuse too much code across components can increase their coupling. **Isolation is more important than avoiding the repetition of superficially similar code**.


### Content-independent components

The most reusable components are those that are independent of the content.

We shouldn’t be afraid of making the connections between layers clear and explicit rather than having class names rigidly reflect specific content. Doing this doesn’t make classes “unsemantic”, it just means that their semantics are not derived from the content. We shouldn’t be afraid to include additional HTML elements if they help create more robust, flexible, and reusable components. Doing so does not make the HTML “unsemantic”, it just means that you use elements beyond the bare minimum needed to markup the content.

For example, instead of:

```
<ol class="features">
   <li>[feature content]</li>
   <li>[feature content]</li>
   <li>[feature content]</li>
</ol>
```

we can use:

```
<ol class="numberedList">
   <li class="numberedList-item">[feature content]</li>
   <li class="numberedList-item">[feature content]</li>
   <li class="numberedList-item">[feature content]</li>
</ol>
```

## Readings

* [Suit CSS design principles](https://github.com/suitcss/suit/blob/master/doc/design-principles.md)
* [About HTML semantics and front-end architecture ](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [CSS Guidelines by Harry Roberts](http://cssguidelin.es/)
* [CSS Guidelines by Chris Pearce](https://github.com/chris-pearce/css-guidelines)
* [Sass Guidelines by Hugo Giraudel](https://sass-guidelin.es)

## Keep in mind

Modularity, DRY, SRP, etc. is never a goal, just an approach. Don’t let the pursuit of theory get in the way of actual productivity.
