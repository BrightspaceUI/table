/* global SauceBrowserFactory, load */

load('galen.common.config.js');

this.browsers = {
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10',
		size: '1400x900'
	}),
	firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10',
		size: '1400x900'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10',
		size: '1400x900'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10',
		size: '1400x900'
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	})
};
