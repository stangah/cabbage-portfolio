'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();
var del = require('del');

gulp.task('copy', function() {
    gulp.src([
            './app/downloads/**',
            './app/scripts/**',
            './app/views/**',
            './app/images/**'
        ], {base: './assets'})
        .pipe(gulp.dest('.tmp'));
});

gulp.task('scripts', function() {
    gulp.src('app/scripts/main.js')
        .pipe($.browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/images-pre/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('app/images'))
        .pipe($.size());
});

gulp.task('image-move', function() {
    gulp.src('images-pre', {base: './assets'})
        .pipe(gulp.dest('app/images-post'));
});

gulp.task('clean', function (cb) {
    del([
        '.tmp',
        'dist'
    ], cb);
});


gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'build'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    gulp.watch([
        '.tmp/**'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images-pre/**/*', ['images']);
    gulp.watch(['app/views/**/*', 'app/index.html'], ['copy']);
});

gulp.task('build', ['scripts', 'styles', 'images', 'image-move', 'copy']);
