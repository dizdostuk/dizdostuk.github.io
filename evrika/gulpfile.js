let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('scripts', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/**/*js', gulp.parallel('scripts'));
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));