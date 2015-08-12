module.exports = (grunt) ->
  grunt.config('jade',
    compile:
      files:
        'index.html': ['index.jade']
  )

  grunt.loadNpmTasks 'grunt-contrib-jade'
