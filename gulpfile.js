'use strict'

const gulp         = require('gulp'),
      util         = require('gulp-util'),
      sass         = require('gulp-sass'),
      babel        = require('gulp-babel'),
      uglify       = require('gulp-uglify'),
      vueify       = require('vueify'),
      source       = require("vinyl-source-stream"),
      buffer       = require("vinyl-buffer"),
      envify       = require("envify"),
      htmlmin = require('gulp-html-minifier'),
      babelify     = require('babelify'),
      browserify   = require("browserify"),
      browserSync  = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer');

var env = util.env.production ? "production" : "development";

gulp.task('sass', () => {
  return gulp.src('./src/styles/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

gulp.task('psass', () => {
  return gulp.src('./src/styles/print.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

gulp.task("buildjs", function () {
    return browserify({
        "entries": ['./src/index.js'],
        "debug": true
    })
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .transform('envify', {global: true, _: 'purge', NODE_ENV: env})
    .transform(vueify)
    .bundle()
    .pipe(source("waReader.js"))
    .pipe(buffer())
    .pipe(env === 'production' ? uglify() : util.noop())
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/styles/**/*.scss', ['sass', 'psass']);
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
    return gulp.src('./src/assets/*')
        .pipe(gulp.dest("./dist/assets/"))
});

gulp.task('build', ['sass', 'psass', 'buildjs', 'buildassets'], () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
          collapseWhitespace: true,
          env: env,
        }))
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream());
});

gulp.task('default',  ['serve']);
