Package.describe({
  name: 'jcheroske:less-positioning',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Various LESS mixins that make positioning elements easier.',
  // URL to the Git repository containing the source code for this package.
  git: 'git@bitbucket.org:jcheroske/positioning-mixins.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('less', 'client');
  api.addFiles('index.import.less', 'client');
});
