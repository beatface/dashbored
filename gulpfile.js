'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('server.js', 'controllers/*.js', 'models/*.js', electron.restart);

  // Reload renderer process
  gulp.watch(['./public/**/*.js', './public/app.js', './public/**/*.html'], electron.reload);
});

gulp.task('default', ['serve']);
