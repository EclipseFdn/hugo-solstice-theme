module.exports = (grunt) ->
  # Initializing the configuration object
  grunt.initConfig
    copy: main: files: [
      {
        expand: true
        flatten: true
        src: [ 'bower_components/bootstrap/fonts/*' ]
        dest: 'static/public/fonts/'
        filter: 'isFile'
      }
      {
        expand: true
        flatten: true
        src: [ 'bower_components/fontawesome/fonts/*' ]
        dest: 'static/public/fonts/'
        filter: 'isFile'
      }
    ]
    less: development:
      options: compress: true
      files:
        './static/public/stylesheets/eclipse-ide.min.css': [
          './bower_components/solstice-assets/stylesheets/quicksilver/eclipse-ide/styles.less'
        ]
        './static/public/stylesheets/quicksilver.min.css': [
          './bower_components/solstice-assets/stylesheets/quicksilver/styles.less'
        ]
        './static/public/stylesheets/jakarta.min.css': [
          './bower_components/solstice-assets/stylesheets/quicksilver/jakarta/styles.less'
        ]
    concat:
      js_frontend:
        src: [
          './bower_components/jquery/dist/jquery.min.js'
          './bower_components/bootstrap/dist/js/bootstrap.min.js'
          './bower_components/prism/prism.js'
          './node_modules/feather-icons/dist/feather.min.js'
          './src/javascript/solstice.js'
        ]
        dest: './static/public/javascript/solstice.min.js'
    uglify:
      options:
        mangle: false
        preserveComments: 'some'
      frontend: files:
        './static/public/javascript/solstice.min.js': './static/public/javascript/solstice.min.js'
    watch:
      all:
        files: ['Gruntfile.coffee']
        tasks: 'default'
      js_frontend:
        files: [
          './bower_components/jquery/jquery.js'
          './bower_components/bootstrap/dist/js/bootstrap.js'
          './src/javascript/solstice.js'
        ]
        tasks: [
          'concat:js_frontend'
          'uglify:frontend'
        ]
      less:
        files: [
          './bower_components/solstice-assets/stylesheets/*.less'
          './bower_components/solstice-assets/stylesheets/**/*.less'
        ]
        tasks: [ 'less' ]
      imgmin:
        files: [
          './bower_components/solstice-assets/images/components/**/*.{png,jpg,gif}'
          './bower_components/solstice-assets/images/forums/**/*.{png,jpg,gif}'
          './bower_components/solstice-assets/images/hudson/**/*.{png,jpg,gif}'
          './bower_components/solstice-assets/images/lists/**/*.{png,jpg,gif}'
          './bower_components/solstice-assets/images/logo/**/*.{png,jpg,gif,svg}'
          './bower_components/solstice-assets/images/template/**/*.{png,jpg,gif}'
        ]
        tasks: [ 'imagemin:dynamic' ]
    imagemin: dynamic:
      files: [ {
        expand: true
        cwd: './bower_components/solstice-assets/images'
        src: [
          'components/**/*.{png,jpg,gif}'
          'forums/**/*.{png,jpg,gif}'
          'hudson/**/*.{png,jpg,gif}'
          'lists/**/*.{png,jpg,gif}'
          'logo/**/*.{png,jpg,gif}'
          'template/**/*.{png,jpg,gif}'
        ]
        dest: 'static/public/images'
      } ]
      options: optimizationLevel: 3

  # Plugin loading
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'

  # Task definition
  grunt.registerTask 'default', ['copy', 'imagemin', 'watch' ]
  return
