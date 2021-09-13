const gulp = require('gulp')
const del = require('del')
const htmlmin = require('gulp-htmlmin')
const cleancss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
// const imagemin = require('gulp-imagemin')

// import imagemin from 'gulp-imagemin';
// import * as imagemin from 'imagemin';
// import { imagemin } from 'imagemin';

// const brotli = require('gulp-brotli')

// Clean dir
gulp.task('clean-dir', () => {
  return del('dist/**', { force: true })
})
// Minify HTML files
gulp.task('minify-html', () => {
  return gulp
    .src(['./src/**/*.html'])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeTagWhitespace: true,
      })
    )
    .pipe(gulp.dest('./dist'))
})
// Minify CSS files
gulp.task('minify-css', () => {
  return gulp
    .src('./src/**/*.css')
    .pipe(cleancss({ level: '2' }))
    .pipe(gulp.dest('./dist'))
})
// Minify JS files
gulp.task('minify-js', () => {
  return gulp
    .src('./src/**/*.js')
    .pipe(
      uglify({
        mangle: { toplevel: true },
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true,
        },
      })
    )
    .pipe(gulp.dest('./dist'))
})
// Compress with brotli algorithm
// gulp.task('compress-brotli', () => {return gulp.src('./src/*').pipe(brotli.compress()).pipe(gulp.dest('./dist'))})

// Compress images
// gulp.task('compress-img', () => {
//   return gulp.src('./src/img/**')
//   .pipe(imagemin())
//   .pipe(gulp.dest('./dist'))
// })

// Run all tasks with default command
gulp.task('default', gulp.series('clean-dir', 'minify-html', 'minify-css', 'minify-js'))
