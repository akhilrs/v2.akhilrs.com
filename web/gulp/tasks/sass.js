var gulp = require('gulp');
var config = require('../config').sass;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../utils/handleErrors');
var livereload = require('gulp-livereload')


gulp.task('sass', function() {
    return gulp.src(config.src)
    	.pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(livereload())

});