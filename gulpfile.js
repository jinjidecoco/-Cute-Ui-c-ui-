var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    queue = require('gulp-sequence'), //让任务安装设置的先后顺序执行 防止相互依赖的问题产生   
    proxyMiddleware = require('http-proxy-middleware'),
    lessAll = 'static/less/main.less';



gulp.task('less', function() {
    gulp
        .src("lessAll")
        .pipe(less())
        .pipe(gulp.dest("./static/css"));
})
gulp.task('watch', function() {
    var less_watch = lessAll.concat('./static/less/**/*');
    gulp.watch(less_watch, function() {
        queue('less')(function() {
            gulp.src('./')
                .pipe(connect.reload());
        });
    });
    gulp.watch("./*.html", function() {
        gulp.src("./").pipe(connect.reload());
    });
})
gulp.task("dev", function(cb) {
    queue("less", "connect", "watch")(cb);
});