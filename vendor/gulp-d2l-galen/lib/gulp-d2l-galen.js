'use strict';

const galen = require('gulp-galen'),
	gulp = require('gulp'),
	sauceConnectLauncher = require('sauce-connect-launcher'),
	startServer = require('polyserve').startServer,
	through = require('through2');

function GulpD2LGalen(options) {
	let sauceConnectProcess, polyserveServer;

	function cleanup(cb) {
		let polyServePromise = Promise.resolve();
		if (polyserveServer) {
			polyServePromise = new Promise(function(resolve) {
				polyserveServer.close(resolve);
			});
		}

		let sauceConnectPromise = Promise.resolve();
		if (sauceConnectProcess) {
			sauceConnectPromise = new Promise(function(resolve) {
				sauceConnectProcess.close(resolve);
			});
		}

		function done() {
			cb();
		}

		return Promise.all([polyServePromise, sauceConnectPromise]).then(done, done);
	}
	return through.obj(function(file, enc, cb) {
        /* eslint no-invalid-this: 0 */
		const stream = this;
		const opts = Object.assign({
			sauceTest: __dirname + '/galen/check-sauce.test.js',
			defaultTest: __dirname + '/galen/check-local.test.js',
			dumpTest: __dirname + '/galen/dump.test.js',

			sauceConfig: __dirname + '/galen/galen.sauce.config.js',
			defaultConfig: __dirname + '/galen/galen.local.config.js',
			commonConfig: file.path
		}, options);
		opts.galen = opts.galen || {};
		opts.galen.properties = Object.assign({
			CommonConfig: opts.commonConfig,
			SauceConfig: opts.sauceConfig,
			LocalConfig: opts.defaultConfig,
			USERNAME: opts.sauce && opts.sauce.username && opts.sauce.username || process.env.SAUCE_USERNAME,
			ACCESS_KEY: opts.sauce && opts.sauce.accessKey && opts.sauce.accessKey || process.env.SAUCE_ACCESS_KEY
		}, opts.galen.properties);

		let polyServerPromise = Promise.resolve();
		if (opts.polyserve) {
			let polyServeOpts = {};
			if ('object' === typeof opts.polyserve) {
				polyServeOpts = opts.polyserve;
			}
			polyServerPromise = startServer(polyServeOpts);

			polyServerPromise.then(function(server) {
				polyserveServer = server;
			});
		}

		let sauceConnectPromise = Promise.resolve();
		if (opts.sauce) {
			let sauceOpts = {};
			if ('object' === typeof opts.polyserve) {
				sauceOpts = opts.sauce;
			}
			sauceConnectPromise = new Promise(function(resolve, reject) {
				sauceConnectLauncher(sauceOpts, function(err, scp) {
					if (err) {
						reject(err);
						return;
					}
					resolve(scp);
				});
			});

			sauceConnectPromise.then(function(scp) {
				sauceConnectProcess = scp;
			});
		}

		const src = opts.sauce && opts.sauceTest || opts.dump && opts.dumpTest || opts.defaultTest;

		Promise.all([polyServerPromise, sauceConnectPromise])
			.then(function() {
				gulp.src(src)
					.pipe(galen.test(opts.galen))
					.on('data', function(data) {
						stream.push(data);
					})
					.on('error', function(err) {
						cleanup(cb.bind(null, err));
					})
					.on('end', function() {
						cb(null);
					});
			})
			.catch(function(err) {
				cleanup(cb.bind(null, err));
			});
	}, cleanup);
}

module.exports = GulpD2LGalen;
