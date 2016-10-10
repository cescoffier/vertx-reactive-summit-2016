/* global module:false */
module.exports = function(grunt) {
	var sources = '../main/resources/assets';
	var port = grunt.option('port') || 8000;
	var base = grunt.option('base') || sources;

	function dir(short) {
		return sources + '/' + short;
	}

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2015 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: dir('/js/reveal.js'),
				dest: dir('js/reveal.min.js')
			}
		},

		sass: {
			core: {
				files: {
					'../main/resources/assets/css/reveal.css': dir('css/reveal.scss')
				}
			},
			themes: {
				files: [
					{
						expand: true,
						cwd: '../main/resources/assets/css/theme/source',
						src: ['*.scss'],
						dest: dir('css/theme'),
						ext: '.css'
					}
				]
			}
		},

		autoprefixer: {
			dist: {
				src: dir('css/reveal.css')
			}
		},

		cssmin: {
			compress: {
				files: {
					'../main/resources/assets/css/reveal.min.css': [ dir('css/reveal.css') ]
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false,
					define: false,
					exports: false
				}
			},
			files: [ 'Gruntfile.js', 'js/reveal.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			js: {
				files: [ dir('*.js')]
			},
			theme: {
				files: [ dir('css/theme/source/*.scss'), dir('css/theme/template/*.scss') ],
				tasks: 'css-themes'
			},
			css: {
				files: [ dir('css/reveal.scss') ],
				tasks: 'css-core'
			},
			html: {
				files: [ dir('*.html')]
			},
			markdown: {
				files: [ dir('*.md') ]
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-zip' );

	// Default task
	grunt.registerTask( 'default', [ 'css', 'js' ] );

	// JS task
	grunt.registerTask( 'js', [ 'jshint', 'uglify' ] );

	// Theme CSS
	grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

	// Core framework CSS
	grunt.registerTask( 'css-core', [ 'sass:core', 'autoprefixer', 'cssmin' ] );

	// All CSS
	grunt.registerTask( 'css', [ 'sass', 'autoprefixer', 'cssmin' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
