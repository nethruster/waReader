'use strict'

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      babel        = require('gulp-babel'),
      uglify       = require('gulp-uglify'),
      vueify       = require('vueify'),
      source       = require("vinyl-source-stream"),
      buffer       = require("vinyl-buffer"),
      babelify     = require('babelify'),
      browserify   = require("browserify"),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src('./src/styles/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());;
});

gulp.task("buildjs", function () {
    return browserify({
        "entries": ['./src/index.js'],
        "debug": true
    })
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .transform(vueify)
    .bundle()
    .pipe(source("waReader.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('js:watch', () => {
    gulp.watch('./src/helpers/**/*.js', ['buildjs']);
    gulp.watch('./src/index.js', ['buildjs']);
});

gulp.task('vue:watch', () => {
    gulp.watch('./src/views/**/*.vue', ['buildjs']);
});

gulp.task('serve', ['build', 'sass:watch', 'js:watch', 'vue:watch'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('buildassets', () => {
    return gulp.src('./src/media/*')
        .pipe(gulp.dest("./dist/media/"))
});

gulp.task('build', ['sass', 'buildjs', 'buildassets'], () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream());
});


gulp.task('default',  ['serve']);
