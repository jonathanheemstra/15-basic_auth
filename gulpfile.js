'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const cache = require('gulp-cache');
const istanbul = require('gulp-istanbul');

gulp.task('lint', function() {
  gulp.src(['**/*.js', '**/*/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function() {
  return gulp.src(['./lib/*.js', './model/*.js', '!node_modules/**'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
  gulp.src('./test/*-test.js', { read: false})
  .pipe(mocha({ report: 'spec'}))
  .pipe(istanbul.writeReports())
  .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}));
});

gulp.task('dev', function() {
  gulp.watch(['*/**.js', '*/**/*.js', '!node_modules/**'], ['lint', 'test']);
});

gulp.task('default', ['dev']);



gulp.task('clear', function (done) {
  return cache.clearAll(done);
});
