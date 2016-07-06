var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require('../config').browserify;
var jslibs = require('../config').jslibs;
var handleErrors = require('../utils/handleErrors');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var shim = require('browserify-shim');
var sourcemaps = require('gulp-sourcemaps');
var debowerify = require('debowerify');
var uglify = require('gulp-uglify');


gulp.task('browserify', ['coffee'],  function() {
    gulp.src(config.src)
      .pipe(sourcemaps.init())
      .pipe(browserify({
      	shim:{
      		jquery: {
      			path : jslibs.jquery.path,
      			exports : jslibs.jquery.exports
      		}
      	},
      	// transform: ['debowerify'],
      	debug: true
      }))
      .pipe(sourcemaps.write())
      .pipe(rename('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.dest))
      .pipe(livereload())
});