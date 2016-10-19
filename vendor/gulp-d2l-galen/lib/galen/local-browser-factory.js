/* global createDriver */
/* eslint no-invalid-this: 0 */
'use strict';

function localBrowserFactory(args, url) {
	return {
		driver: createDriver.apply(this, [url].concat(args)),
		reportStatus: function() {}
	};
}

this.localBrowserFactory = localBrowserFactory;
