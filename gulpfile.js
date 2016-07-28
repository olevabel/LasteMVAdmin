var gulp = require('gulp'),
	typescript = require('gulp-typescript'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    util = require('gulp-util');


// run init tasks
gulp.task('default', ['assets', 'html','css', 'compile-ts']);

gulp.task('config', ['dependencies'], function() {
	gulp.src((util.env.dev ? './config/dev.ts' : './config/stage.ts'))
		.pipe(rename('env.ts'))
		.pipe(gulp.dest('src/app/services'));
});

gulp.task('compile-ts', ['config'], function() {
	var tsProject = typescript.createProject('./tsconfig.json');
	tsProject.src('src/**/*.ts')
		.pipe(typescript(tsProject))
		.pipe(gulp.dest('build/app'));
});

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true,
      host: '0.0.0.0',
      port: process.env.PORT || 8000
    }));
});


gulp.task("heroku:production",['default'], function() {

}); // the task does not need to do anything.


// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['compile-ts']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/app/assets/images/*.jpg', ['assets']);
});

// move dependencies into build dir
gulp.task('dependencies',  function () {
  return gulp.src(['node_modules/**'])
    .pipe(gulp.dest('build/node_modules'));
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});

// move assets
gulp.task('assets', function () {
  return gulp.src('src/app/assets/images/*.jpg')
    .pipe(gulp.dest('build/app/assets/images'))
});