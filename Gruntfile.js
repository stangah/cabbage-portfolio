/* global module,require */

'use strict';
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        browserify: {
            dev: {
                files: {
                    'dist/bundle.js': ['app/scripts/main.js']
                }
            },
            azure: {
                files: {
                    'azure/bundle.js': ['app/scripts/main.js']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'app/styles',
                    cssDir: 'dist/css'
                }
            },
            azure: {
                options: {
                    sassDir: 'app/styles',
                    cssDir: 'azure/css'
                }
            }
        },
        watch: {
            css: {
                files: ['app/styles/**/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['app/scripts/**/*.js'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['app/views/**/*.html', 'app/index.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },
            images: {
                files: ['app/images/**/*'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    src: ['dist/**/*']
                }]
            },
            azure: {
                files: [{
                    src: ['azure']
                }]
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'app', src: ['views/**'], dest: 'dist'},
                    {expand: true, cwd: 'app', src: ['images/**'], dest: 'dist'},
                    {expand: true, cwd: 'app', src: ['index.html'], dest: 'dist'}
                ]
            },
            azure: {
                files: [
                    {expand: true, cwd: 'app', src: ['views/**'], dest: 'azure'},
                    {expand: true, cwd: 'app', src: ['images/**'], dest: 'azure'},
                    {expand: true, cwd: 'app', src: ['index.html'], dest: 'azure'}
                ]
            }
        },
        shell: {
            azure: {
                command: [
                    'git add azure/.',
                    'git commit -m "temp for azure"',
                    'git push azure -f',
                    'echo "DONEDONEDONEDONE"'
                ].join('&&')
            }
        },
        connect: {
            options: {
                port: 9001,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            require('connect-livereload')(),
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', function() {
        return grunt.task.run([
            'browserify:dev',
            'compass:dev',
            'copy:dev'
        ]);
    });

    grunt.registerTask('azure', function() {
        return grunt.task.run([
            'browserify:azure',
            'compass:azure',
            'copy:azure',
            'shell:azure'
        ]);
    });

    grunt.registerTask('server', function() {

        return grunt.task.run([
            'clean:dist',
            'build',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};
