/* global LocalBrowserFactory, load */

this.browsers = {
	phantomjs: new LocalBrowserFactory({ browser: 'phantomjs', size: '768x768' })
};

load('galen.common.config.js');
