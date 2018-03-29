var gulp = require("gulp"),
    less = require("gulp-less"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    connect = require("gulp-connect"),
    change = require("gulp-changed"),
    watch = require("gulp-watch"),
    babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    queue = require("gulp-sequence"), //让任务安装设置的先后顺序执行 防止相互依赖的问题产生
    proxyMiddleware = require("http-proxy-middleware"),
    lessAll = ["static/less/main.less"];


gulp.task('less', function() {
    return gulp.src(lessAll)
        .pipe(change("./build/css"))
        .pipe(less())
        .pipe(gulp.dest("./build/css"));
});
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
gulp.task('default', function() {
    return gulp.src('static/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/js'));
});
gulp.task('server', function() {
    var middleware = proxyMiddleware(["/api"], {
        target: "https://api.www.hzzwxk.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        }
    });
    connect.server({
        root: './',
        port: 8082,
        livereload: true,
        middleware: function(connect, opt) {
            return [middleware];
        }
    })
})
gulp.task("dev", function(cb) {
    queue("default", "less", "server", "watch")(cb);
})