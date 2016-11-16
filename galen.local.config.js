/* global localBrowserFactory, load */

load('galen.common.config.js');

this.browsers = {
	phantomjs: {
		browserName: 'phantomjs',
		browserFactory: localBrowserFactory.bind(this, ['768x768', 'phantomjs'])
	}
};
