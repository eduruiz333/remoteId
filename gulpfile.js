// Configurações para compilar SASS
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', compilaSass);
gulp.task('watch', watch);

function compilaSass() {
    return gulp
        .src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
}

function watch() {
    gulp.watch('./assets/sass/**/*.scss', compilaSass)
}