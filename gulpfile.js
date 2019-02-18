var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var stripInlineComments = require('postcss-strip-inline-comments');
var scss = require('postcss-scss');
var concat = require('gulp-concat');
var nested = require('postcss-nested');
var precss = require('precss');
var short = require('postcss-short');
var sorting = require('postcss-sorting');
var csslint = require('gulp-csslint');
var pug = require('gulp-pug');gulp


// Сборка компонентов в полные файлы

gulp.task('com', function() {
    return gulp.src('./src/scss/common.blocks/*/*.scss')
        .pipe(autoprefixer({
            browsers: ['> 0%', 'IE 9'],
            cascade: false
        }))
        .pipe(concat('project.css'))
        .pipe(gulp.dest('./src/'));
});

gulp.task('resp', function() {
    return gulp.src('./src/scss/responsive.blocks/*/*/*.scss')
        .pipe(concat('project-responsive.css'))
        .pipe(gulp.dest('./src/'));
});

gulp.task('js-def', function() {
    return gulp.src('./src/scss/*/*/*.js')
        .pipe(concat('project.js'))
        .pipe(gulp.dest('./public/javascript'));
});

gulp.task('js-resp', function() {
    return gulp.src('./src/scss/*/*/*/*.js')
        .pipe(concat('project-responsive.js'))
        .pipe(gulp.dest('./public/javascript'));
});


// Компиляция CSS

gulp.task('postcss', function() {
    var preprocessors = [
        precss,
    ]

    var processors = [
        nested,
        short,
        sorting,
        stripInlineComments
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(preprocessors))
        .pipe(postcss(processors, { syntax: scss }))
        .pipe(gulp.dest('./public/css'));
});

// Вызов всех команд
gulp.task('css', ['com', 'resp', 'postcss']);
gulp.task('js', ['js-def', 'js-resp']);

// Компиляция html

gulp.task('html', function buildHTML() {
  return gulp.src('./src/pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public'));
});

// CSS Линтер

gulp.task('lint', function() {
    gulp.src('./public/css/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});
