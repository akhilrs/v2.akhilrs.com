var gulp = require('gulp');
// var coffee = require('gulp-coffee');
var livereload = require('gulp-livereload');
var config = require('../config').coffee;
var handleErrors = require('../utils/handleErrors');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var coffeeify = require('coffeeify');
var debowerify = require('debowerify');
var uglify = require('gulp-uglify');


gulp.task('coffee', function() {
    gulp.src(config.mainfile)
      .pipe(sourcemaps.init())
      // .pipe(coffee({bare: true}).on('error', handleErrors))
      .pipe(browserify({
      	/*shim:{
      		jquery: {
      			path : jslibs.jquery.path,
      			exports : jslibs.jquery.exports
      		}
      	},*/
      	transform: ['coffeeify', 'debowerify'],
      	extensions: ['.coffee'],
      	debug: true
      }))
      .pipe(sourcemaps.write())
      .pipe(rename('app.js'))
      // .pipe(uglify())
      .pipe(gulp.dest(config.dest))
      .pipe(livereload())
});