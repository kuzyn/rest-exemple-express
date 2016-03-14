//////////////////////////////////////
// Simple task to update our views  //
//////////////////////////////////////

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();

// our browser-sync config + nodemon chain
gulp.task('browser-sync', ['nodemon'], function() {
	bs.init(null, {
		proxy: "http://localhost:8000",
		browser: "chromium-browser",
		port: 9000,
	});
});

// the real stuff
gulp.task('default', ['browser-sync'], function () {
	gulp.watch('./views/**/*.jade', bs.reload);
	gulp.watch('./public/**/*.js', bs.reload);
	gulp.watch('./public/**/*.css', bs.reload);
	gulp.watch(['./routes/**/*.js', './app.js', './bin/www', './bin/*.js'], ['bs-delay']);
});

// give nodemon time to restart befor we reload the page
gulp.task('bs-delay', function () {
  setTimeout(function () {
    bs.reload({ stream: false });
  }, 1500);
});

// our gulp-nodemon task
gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: './bin/www',
		ext: 'js',
		ignore: ['public/**/*.js'],
		env: {
			'NODE_ENV': 'development-gulp',
			'DEBUG': 'express:*'
	 }
	}).on('start', function () {
		//avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	})
	.on('crash', function() {
		// console.log('nodemon.crash');
	})
	.on('restart', function() {
		// console.log('nodemon.restart');
	})
	.once('quit', function () {
		// handle ctrl+c without a big weep
		process.exit();
	});
});
