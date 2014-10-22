(function () {
    'use strict';

    var gulp = require('gulp');
    var webserver = require('gulp-webserver');

    gulp.task('serve', function () {
        gulp.src('app')
            .pipe(webserver({
                livereload: true,
                open: true
            }));
    });

}());
