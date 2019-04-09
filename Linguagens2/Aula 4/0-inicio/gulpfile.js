
var gulp = require('gulp');
var mincss = require('gulp-clean-css');
var concat = require('gulp-concat');





gulp.task('teste', async function() {

    return  gulp.src('src/css/*')
                .pipe(mincss())
                .pipe(gulp.dest('dist/css'));

});

gulp.task('img', async function() {

    return  gulp.src('src/img/*')
                .pipe(concat())
                .pipe(gulp.dest('dist/img'));

});
