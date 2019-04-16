var gulp=require("gulp")
var sass=require("gulp-sass")
var css=require("gulp-clean-css")
var webserver=require("gulp-webserver")

gulp.task("server",function(){
    return gulp.src(".")
    .pipe(webserver({
        open:true,
        livereload:true,
        host:"localhost",
        port:7777,
        fallback:"./src/index.html"
    }))
    
})
gulp.task("sass",function(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/sass"))
})
gulp.task("css",function(){
    return gulp.src("./src/css/*.css")
    .pipe(css())
    .pipe(gulp.dest("dist/css"))
})
gulp.task("watch",function(){
    gulp.watch("./src/sass/*.scss",gulp.series("sass"))
})
gulp.task("default",gulp.series("sass","server","watch"))