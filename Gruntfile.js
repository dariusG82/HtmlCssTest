// Importuojame Grunt biblioteką
module.exports = function(grunt){
    grunt.initConfig({
        // Grunt tasks description, parameters
        sass: {
            main: {
                files: {
                    'publish/css/style.css' : 'src/sass/style.scss'
                }
            }
        },
        // Create Grunt watch Task
        watch: {
            css: {
                files :'src/sass/*.scss',
                tasks: 'sass'
            }
        }
    });

    // Importing Gunt Sass-Scss library
    grunt.loadNpmTasks('grunt-sass-scss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Creating Grunt task
    grunt.registerTask('gsass', ['watch']);

};