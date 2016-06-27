var gulp = require('gulp');
var config = require('../config').markup;
var livereload = require('gulp-livereload');

gulp.task('markup', function() {
    return gulp.src(config.path)
      .pipe(livereload())
});