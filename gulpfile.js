var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function() {
    return gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dest'));
});

gulp.task('watch_babel', ['babel'], function() {
    gulp.watch(['src/*.js', 'src/**/*.js'], ['babel']);
});
