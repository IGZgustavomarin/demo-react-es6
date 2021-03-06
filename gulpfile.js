'use strict';

var gulp = require('gulp'),
  babelify = require('babelify'),
  uglifyify = require('uglifyify'),
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  source = require('vinyl-source-stream');


var vendors = [
  'react',
  'browser-request',
  'promise/lib/es6-extensions'
];


gulp.task('vendors', function () {
  var stream = browserify({
    debug: false,
    require: vendors
  });

  stream.bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest('dist/js'));

  return stream;
});



gulp.task('app', function () {
  var stream = browserify({
    entries: ['./src/client/js/index.js'],
    transform: [babelify, uglifyify],
    debug: true, // <- true for source mapping
    extensions: ['.js','.jsx'],
    fullPaths: false
  });

  vendors.forEach(function(vendor) {
    stream.external(vendor);
  });

  return stream.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));

});

gulp.task('watch', [], function () {
  gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['app', browserSync.reload]);
});

gulp.task('browsersync',['vendors','app'], function () {
  browserSync({
    server: {
      baseDir: './dist'
    },
    notify: false,
    open: false
  });

});

gulp.task('default',['browsersync','watch'], function() {});
