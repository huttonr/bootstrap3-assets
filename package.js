
Package.describe({
  name: 'huttonr:bootstrap3-assets',
  summary: 'By itself this package does nothing.  It contains assets for use by huttonr:bootstrap3.',
  version: '3.3.5_6',
  git: 'https://github.com/huttonr/bootstrap3-assets',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('isobuild:compiler-plugin@1.0.0');

  api.addFiles('serve.js', 'server');

  api.addAssets('assets/defaults/bootstrap-settings.default.json', 'server');
  api.addAssets(jsAssets, 'server');
  api.addAssets(lessAssets, 'server');
  api.addAssets(fontAssets, 'client');

  api.export(['_bootstrapGetAsset', '_bootstrapGetJsList']);
});

// Do not edit this list, it is generated by the bash script, run the script instead
var jsAssets = ['assets/bootstrap/js/affix.js','assets/bootstrap/js/alert.js','assets/bootstrap/js/button.js','assets/bootstrap/js/carousel.js','assets/bootstrap/js/collapse.js','assets/bootstrap/js/dropdown.js','assets/bootstrap/js/modal.js','assets/bootstrap/js/popover.js','assets/bootstrap/js/scrollspy.js','assets/bootstrap/js/tab.js','assets/bootstrap/js/tooltip.js','assets/bootstrap/js/transition.js'];
var lessAssets = ['assets/bootstrap/less/alerts.less','assets/bootstrap/less/badges.less','assets/bootstrap/less/breadcrumbs.less','assets/bootstrap/less/buttons.less','assets/bootstrap/less/close.less','assets/bootstrap/less/code.less','assets/bootstrap/less/component-animations.less','assets/bootstrap/less/dropdowns.less','assets/bootstrap/less/grid.less','assets/bootstrap/less/labels.less','assets/bootstrap/less/list-group.less','assets/bootstrap/less/media.less','assets/bootstrap/less/mixins.less','assets/bootstrap/less/mixins/alerts.less','assets/bootstrap/less/mixins/background-variant.less','assets/bootstrap/less/mixins/border-radius.less','assets/bootstrap/less/mixins/center-block.less','assets/bootstrap/less/mixins/clearfix.less','assets/bootstrap/less/mixins/forms.less','assets/bootstrap/less/mixins/gradients.less','assets/bootstrap/less/mixins/grid-framework.less','assets/bootstrap/less/mixins/image.less','assets/bootstrap/less/mixins/labels.less','assets/bootstrap/less/mixins/list-group.less','assets/bootstrap/less/mixins/nav-divider.less','assets/bootstrap/less/mixins/nav-vertical-align.less','assets/bootstrap/less/mixins/opacity.less','assets/bootstrap/less/mixins/pagination.less','assets/bootstrap/less/mixins/panels.less','assets/bootstrap/less/mixins/progress-bar.less','assets/bootstrap/less/mixins/reset-filter.less','assets/bootstrap/less/mixins/reset-text.less','assets/bootstrap/less/mixins/resize.less','assets/bootstrap/less/mixins/responsive-visibility.less','assets/bootstrap/less/mixins/size.less','assets/bootstrap/less/mixins/tab-focus.less','assets/bootstrap/less/mixins/table-row.less','assets/bootstrap/less/mixins/text-emphasis.less','assets/bootstrap/less/mixins/text-overflow.less','assets/bootstrap/less/mixins/buttons.less','assets/bootstrap/less/mixins/grid.less','assets/bootstrap/less/mixins/hide-text.less','assets/bootstrap/less/mixins/vendor-prefixes.less','assets/bootstrap/less/navbar.less','assets/bootstrap/less/navs.less','assets/bootstrap/less/normalize.less','assets/bootstrap/less/pager.less','assets/bootstrap/less/panels.less','assets/bootstrap/less/popovers.less','assets/bootstrap/less/print.less','assets/bootstrap/less/progress-bars.less','assets/bootstrap/less/responsive-embed.less','assets/bootstrap/less/responsive-utilities.less','assets/bootstrap/less/scaffolding.less','assets/bootstrap/less/tables.less','assets/bootstrap/less/thumbnails.less','assets/bootstrap/less/tooltip.less','assets/bootstrap/less/utilities.less','assets/bootstrap/less/wells.less','assets/bootstrap/less/bootstrap.less','assets/bootstrap/less/button-groups.less','assets/bootstrap/less/carousel.less','assets/bootstrap/less/forms.less','assets/bootstrap/less/glyphicons.less','assets/bootstrap/less/input-groups.less','assets/bootstrap/less/jumbotron.less','assets/bootstrap/less/modals.less','assets/bootstrap/less/pagination.less','assets/bootstrap/less/theme.less','assets/bootstrap/less/type.less','assets/bootstrap/less/variables.less'];
var fontAssets = ['assets/bootstrap/fonts/glyphicons-halflings-regular.eot','assets/bootstrap/fonts/glyphicons-halflings-regular.svg','assets/bootstrap/fonts/glyphicons-halflings-regular.ttf','assets/bootstrap/fonts/glyphicons-halflings-regular.woff','assets/bootstrap/fonts/glyphicons-halflings-regular.woff2'];
