//
//  Main Page
//  loads all components
//

Sticky.init(document.querySelector('.sticky'));
TreeNav.init(document.querySelector('.treeNav'));

ScrollSpy(
  document.querySelector('.docs-content'),
  document.querySelector('.docs-nav')
);
