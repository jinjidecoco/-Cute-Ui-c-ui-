var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    change = require('gulp-changed'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    queue = require('gulp-sequence'), // 让任务安装设置的先后顺序执行 防止相互依赖的问题产生
    proxyMiddleware = require('http-proxy-middleware'),
    livereload = require('gulp-livereload'),
    css = './static/css',
    lessAll = ['./static/less/**/*.less']

gulp.task('style', function() {
    return gulp
        .src(lessAll)
        .pipe(change(css))
        .pipe(less())
        .pipe(gulp.dest(css))
        .pipe(concat('cute.css'))
        // .pipe(minifyCss())
        .pipe(gulp.dest('./build/css'))
})

gulp.task('default', function() {
    return gulp
        .src('static/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
})

gulp.task('watch', function() {
    gulp.watch('./*.html', function() {
        gulp.src('./').pipe(connect.reload())
    })
    gulp.watch('static/less/**/*.less', ['style'], function() {
        gulp.src('./').pipe(connect.reload())
    })
    gulp.watch('./static/js/*.js', ['default'], function() {
        gulp.src('./').pipe(connect.reload())
    })
})

gulp.task('servers', function() {
    var middleware = proxyMiddleware(['/api'], {
        target: 'https://api.www.hzzwxk.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/'
        }
    })
    connect.server({
        port: 8092,
        root: './',
        livereload: true,
        middleware: function(connect, opt) {
            return [middleware]
        }
    })
})

gulp.task('develop', function(cb) {
    queue('style', 'default', 'servers', 'watch')(cb)
})