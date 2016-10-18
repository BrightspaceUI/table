/* global createDriver, load */
/* eslint no-invalid-this: 0 */
'use strict';

load(System.getProperty('CommonConfig') + '');

function factory(args, url) {
	return createDriver.apply(this, [url].concat(args));
}

this.reportStatus = function() {};

this.browsers = {
	phantomjs: {
		browserName: 'phantomjs',
		browserFactory: factory.bind(this, ['768x768', 'phantomjs'])
	}
};
