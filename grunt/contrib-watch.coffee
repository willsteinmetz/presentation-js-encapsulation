module.exports = (grunt) ->
  grunt.config('watch',
    coffee:
      files: ['*.coffee']
      tasks: ['coffee']
      options:
        spawn: false
    jade:
      files: ['*.jade']
      tasks: ['jade']
      options:
        spanw: false
  )

  grunt.loadNpmTasks 'grunt-contrib-watch'
