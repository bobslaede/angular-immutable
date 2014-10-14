"use strict";

var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var annotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream')

gulp.task('build:dev', function () {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({
      experimental: true,
      modules: 'register'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('out'))
});

gulp.task('build:prod', function () {

  var src = browserify()
    //.add('bower_components/traceur-runtime/traceur-runtime.js')
    .add('./out/index.js')
    .bundle();

  return src
    .pipe(source('index.js'))
    .pipe(traceur({
      experimental: true,
      modules: 'commonjs'
    }))
    .pipe(annotate())
    .pipe(uglify({
      mangle: false,
      preserveComments: 'all',
      output: {
        beautify: true
      },
      compress: {
        dead_code: true
      }
    }))
    .pipe(gulp.dest('dist'))
    .pipe(rename('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['build:dev'])
});