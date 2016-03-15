'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('server.js', 'controllers/*.js', 'models/*.js', 'routes/*.js', electron.restart);

  // Reload renderer process
  gulp.watch(['./public/*'], electron.reload);
});

gulp.task('default', ['serve']);
