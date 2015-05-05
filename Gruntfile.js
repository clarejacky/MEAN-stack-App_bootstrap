module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%=pkg.name %> <%=grunt.template.today("yyy-mm-dd")%> */\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }

        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
            src: [
                "angular/angular.min.js",
                'angular/angular.min.js.map',
                'angular/angular-csp.css'
            ],
            "dest": 'server/public/vendor/'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    'jquery/dist/jquery.min.js',
                    'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap/dist/css/bootstrap.css.map'

                ],
                "dest": 'server/public/vendors'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "client/",
                src: [
                    'stylesheet.css'
                ],
                "dest": 'server/public/views'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Default Tasks
    grunt.registerTask('default', ['copy', 'uglify']);

};