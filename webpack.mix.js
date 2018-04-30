let mix = require('laravel-mix');
mix.options({uglify: {uglifyOptions: {compress: false, mangle: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./node_modules/solstice-assets/less/quicksilver/styles.less', 'static/css/quicksilver.css');
mix.less('./node_modules/solstice-assets/less/quicksilver/jakarta/styles.less', 'static/css/jakarta.css');
mix.less('./node_modules/solstice-assets/less/quicksilver/eclipse-ide/styles.less', 'static/css/eclipse-ide.css');

mix.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/feather-icons/dist/feather.min.js',
    './src/javascript/solstice.js'
], './static/js/solstice.js');