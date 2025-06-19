module.exports = function (grunt) {
	grunt.initConfig({
		settings: {
			srcPath: "src/",
			distPath: "dist/",
			fileName: "index",
		},

		babel: {
			dist: {
				files: {
					"<%= settings.distPath %>js/<%= settings.fileName %>.js": [
						"<%= settings.srcPath %>js/<%= settings.fileName %>.js",
					],
				},
			},
		},

		uglify: {
			minify: {
				options: {
					beautify: false,
				},
				files: {
					"<%= settings.distPath %>js/<%= settings.fileName %>.min.js":
						[
							"<%= settings.distPath %>js/<%= settings.fileName %>.js",
						],
				},
			},
		},

		umd: {
			all: {
				options: {
					src: "<%= settings.distPath %>js/<%= settings.fileName %>.js",
					dest: "<%= settings.distPath %>js/<%= settings.fileName %>.js",
					objectToExport: "jCaptcha",
				},
			},
		},

		minifyHtml: {
			options: {
				cdata: true,
			},
			dist: {
				files: {
					"<%= settings.distPath %>/index.html":
						"<%= settings.srcPath %>/index.html",
				},
			},
		},

		watch: {
			javascript: {
				expand: true,
				files: ["<%= settings.srcPath %>js/**/*.js", "Gruntfile.js"],
				tasks: ["babel", "umd", "uglify"],
				options: {
					spawn: false,
				},
			},
			html: {
				files: ["<%= settings.srcPath %>*.html"],
				tasks: ["minifyHtml"],
				options: {
					spawn: false,
				},
			},
		},
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("build", ["babel", "umd", "uglify", "minifyHtml"]);
};
