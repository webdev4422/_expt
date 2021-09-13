const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const brotli = require('gulp-brotli')

// Gulp task to minify HTML files
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
// Gulp task to minify CSS files
gulp.task('minify-css', () => {
  return gulp
    .src('./src/**/*.css')
    .pipe(cleanCSS({ level: '2' }))
    .pipe(gulp.dest('./dist'))
})
// Gulp task to minify JS files
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
// Gulp task to compress with brotli algorithm
gulp.task('compress-brotli', () => {
  return gulp.src('./src/*').pipe(brotli.compress()).pipe(gulp.dest('./dist'))
})

// Run all tasks with default command
gulp.task('default', gulp.series('minify-html', 'minify-css', 'minify-js', 'compress-brotli'))
