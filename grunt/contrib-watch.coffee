module.exports = (grunt) ->
  grunt.config('watch',
    coffee:
      files: ['*.coffee']
      tasks: ['coffee']
      options:
        spawn: false
  )

  grunt.loadNpmTasks 'grunt-contrib-watch'
