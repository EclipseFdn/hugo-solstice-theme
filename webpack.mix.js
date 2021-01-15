let mix = require('laravel-mix');
mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./node_modules/eclipsefdn-solstice-assets/less/quicksilver/styles.less', 'static/css/styles.css');

mix.babel([
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.adopters.js'
], './static/js/eclipsefdn.adopters.js');

mix.babel([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/cookieconsent/src/cookieconsent.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js',
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.videos.js',
    './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
    './node_modules/jquery-eclipsefdn-api/dist/jquery.eclipsefdn-api.min.js',
    './node_modules/feather-icons/dist/feather.min.js',
    './node_modules/owl.carousel/dist/owl.carousel.min.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookies.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.eventsmodal.js'
], './static/js/solstice.js');

mix.babel([
    './node_modules/eclipsefdn-solstice-assets/js/solstice.tables.js'
], './static/js/solstice.hugo.js');