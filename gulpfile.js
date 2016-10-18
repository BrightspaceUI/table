/* eslint-env node */
'use strict';

var
	gulp = require('gulp'),
	D2LGalen = require('./vendor/gulp-d2l-galen');

gulp.task('test:galen:local', function() {
	return gulp.src('./galen.config.js')
		.pipe(D2LGalen({
			polyserve: true,
			galen: {
				htmlreport: 'reports'
			}
		}));
});

gulp.task('dump:galen', function() {
	return gulp.src('./galen.config.js')
		.pipe(D2LGalen({
			polyserve: true,
			dump: true
		}));
});

gulp.task('test:galen:sauce', function() {
	return gulp.src('./galen.config.js')
		.pipe(D2LGalen({
			sauce: true,
			sauceConnect: !process.env.TRAVIS_JOB_NUMBER,
			polyserve: true,
			galen: {
				htmlreport: 'reports',
				'parallel-tests': 4,
				properties: {
					NAME: process.env.TRAVIS_REPO_SLUG,
					TUNNEL_IDENTIFIER: process.env.TRAVIS_JOB_NUMBER,
					BUILD: process.env.TRAVIS_BUILD_NUMBER
				}
			}
		}));
});
