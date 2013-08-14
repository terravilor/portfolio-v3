'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('portfolio-v3.jquery.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ',

    // Task configuration.
    clean: {
      build: {
        src: ["js/debug.js", "js/app.min.js","css/app.min.css"]
      }
    },

    coffee: {
      compile: {
        options: {
          banner: '<%= banner %>',
          join: true
        },
        files: {
          'js/debug.js': [
            'coffee/*.coffee',
            'coffee/*/*.coffee'
          ]
        }
      }
    },

    uglify: {
      app: {
        src: 'js/debug.js',
        dest: 'js/app.min.js'
      }
    },

    less: {
      fleury: {
        options: {
          yuicompress: true
        },
        src: 'less/app.less',
        dest: 'css/app.min.css'
      }
    },

    watch: {
      coffee: {
        files: 'coffee/**/*.coffee',
        tasks: ['coffee', 'uglify']
      },
      less: {
        files: 'less/**/*.less',
        tasks: 'less'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean', 'coffee', 'uglify', 'less']);

};
