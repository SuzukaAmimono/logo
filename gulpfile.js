var gulp = require('gulp');

gulp.task('default',['hello']);

gulp.task('hello', function() {
    console.log("hello, there.");
});
