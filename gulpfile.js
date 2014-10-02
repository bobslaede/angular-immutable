var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var es6ify = require('es6ify');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');

gulp.task('watch', function () {
    return watch('src/**/*.js', function (files, cb) {
        gulp.start('build', cb);
    });
});

gulp.task('build', function () {
    return gulp.src('src/index.js')
        .pipe(browserify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
});
