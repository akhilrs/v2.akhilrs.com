var gulp = require('gulp');
var config = require('../config');
var livereload = require('gulp-livereload');


gulp.task('watch', function() {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.coffee.src, ['coffee']);
    gulp.watch(config.markup.path).on('change', livereload.changed);
});