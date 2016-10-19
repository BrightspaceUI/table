/* global load, localBrowserFactory */
/* eslint no-invalid-this: 0 */
'use strict';

load('galen.config.js');

this.browsers = {
	phantomjs: {
		browserName: 'phantomjs',
		browserFactory: localBrowserFactory.bind(this, ['768x768', 'phantomjs'])
	}
};
