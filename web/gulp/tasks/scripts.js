var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', function (callback) {
  webpack(require('../../webpack.config.js'),function (error, stats) {
    if(error){
      console.log(toString(error));
    }
    console.log(toString(stats));
    callback();
  });
})