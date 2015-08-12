module.exports = (grunt) ->
  grunt.config('coffee',
    compile:
      options:
        sourceMap: true
        bare: true
      files:
        'encapsulation.js': 'encapsulation.coffee'
  )

  grunt.loadNpmTasks 'grunt-contrib-coffee'
