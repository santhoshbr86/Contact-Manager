module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        less: {
            development : {
                files: {
                    'app/css/home.css':'app/less/home.less',
                    'app/css/addContact.css':'app/less/addContact.less',
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'style/style.min.css': ['app/css/*.css']
                }
            }

        },
        concat: {
            dist: {
                src:['app/js/*.js','app/js/**/*.js'],
                dest:'scripts/script.js'
            }
        },
        uglify: {
            target:{
                files:{'scripts/script.min.js':'scripts/script.js'}
            }
        },
        watch: {
            watchAll : {
                files : ['app/less/*.less', 'app/css/*.css', 'app/js/**/*.js','app/js/app.js', 'scripts/script.js'],
                tasks : ['less','cssmin', 'concat', 'uglify'],
                options:{
                    spawn:true
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};
