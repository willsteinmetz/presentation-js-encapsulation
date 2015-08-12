module.exports = (grunt) ->
  grunt.initConfig(
    pkg: require('./package.json')
  )

  grunt.loadTasks 'grunt'

  grunt.registerTask 'default', [
    'coffee'
  ]
