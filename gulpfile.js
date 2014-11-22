'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();
var del = require('del');
var argv = require('yargs').argv;
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');

gulp.task('copy', function() {
    return gulp.src([
        './app/downloads/**/*',
        './app/scripts/**/*',
        './app/views/**/*',
        './app/images/**/*',
        './app/index.html'
    ], {base: './app/'})
        .pipe($.if(argv.azure, gulp.dest('azure'), gulp.dest('.tmp')));
    });

gulp.task('scripts', function() {
    return gulp.src('app/scripts/main.js')
        .pipe($.browserify({
            insertGlobals : true
        }))
        .pipe($.if(argv.azure, gulp.dest('azure'), gulp.dest('.tmp')));
    });

gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .on('error', function (err) { console.log(err.message); })
        .pipe($.if(argv.azure, gulp.dest('azure/styles'), gulp.dest('.tmp/styles')))
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
    return gulp.src('./app/images-pre/**/*')
        .pipe(gulp.dest('app/images-post'));
});

gulp.task('image-clean', function (cb) {
    return del(['./app/images-pre/**/*'], cb);
});

gulp.task('clean', function (cb) {
    var files  = argv.azure ? ['azure'] : ['.tmp', 'dist'];
    return del(files, cb);
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
    server.changed();

    gulp.watch([
        '.tmp/styles/**/*.css',
        '.tmp/main.js',
        'app/views/**/*.html',
        'app/downloads/**/*',
        'app/images/**/*',
        'app/index.html'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
});

gulp.task('build', function(cb) {
    runSequence(['scripts', 'styles', 'images'], 'image-move', 'image-clean', 'copy', cb);
});
