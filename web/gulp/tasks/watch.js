var gulp = require('gulp');
var watch = require('gulp-watch');
// require('./scripts');
//var browserSync = require('browser-sync').create();

gulp.task('watch', function () {

  // browserSync.init({
  //   server : {
  //     baseDir: "app"
  //   }
  // });

  // watch('./app/index.html', function () {
  //   browserSync.reload();
  // });

  // watch('./app/assets/styles/**/*.css', function () {
  //   gulp.start('cssInject');
  // });

  watch('test1.js', function () {
    gulp.start('scripts');
  });

});

// gulp.task('cssInject',['styles'], function () {
//   return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());
// });

// gulp.task('scriptsRefresh',['scripts'], function () {
//   // browserSync.reload();
//   console.log('Done');
// })