var gulp = require('gulp');
var config = require('../config');
var process = require('child_process');
var livereload = require('gulp-livereload');

gulp.task('server', ['watch'], function() {
    var spawn = process.spawn;
    livereload.listen();
    console.info('Starting PHP Webserver...');
    var PIPE = {
        stdio: 'inherit'
    }
    spawn('php', ['-S', '0.0.0.0:8000'], PIPE);
});