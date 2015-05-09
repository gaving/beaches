var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('./src/package.json');

gulp.task('electron', function() {
  gulp.src("")
  .pipe(electron({
    src: './src',
    packageJson: packageJson,
    release: './release',
    cache: './cache',
    version: 'v0.24.0',
    rebuild: false,
    platforms: ['darwin-x64']
  }))
  .pipe(gulp.dest(""));
});
