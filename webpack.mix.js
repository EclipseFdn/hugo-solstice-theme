let mix = require('laravel-mix');
mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./node_modules/eclipsefdn-solstice-assets/less/quicksilver/styles.less', 'static/css/styles.css');

mix.webpackConfig({
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
});

mix.js(['js/main.js'], './static/js/solstice.js');