/* global polymerTests, LocalBrowserFactory, SauceBrowserFactory */
/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	phantomjs: new LocalBrowserFactory({ browser: 'phantomjs', size: '768x768' }),
	//chrome: new LocalBrowserFactory({ browser: 'chrome', size: '768x768' }),
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

var endpoint = 'http://localhost:8080/components/d2l-table/demo/simple.html';
var demoEndpoint = 'http://localhost:8080/components/d2l-table/demo/index.html';

polymerTests(browsers, function(test) {
	test('d2l-table', {
		endpoint: endpoint,
		spec: 'test/acceptance/table.gspec'
	});

	test('d2l-table-rtl', {
		endpoint: endpoint + '?dir=rtl',
		spec: 'test/acceptance/table.rtl.gspec'
	});

	test.shadow('d2l-table-shadow', {
		endpoint: endpoint + '?dom=shadow',
		spec: 'test/acceptance/table.shadow.gspec'
	});

	/*
	// This spec fails because the icon mirroring is broken in Chrome's ShadowDOM
	test.shadow('d2l-table-rtl-shadow', {
		endpoint: endpoint + '?dir=rtl&dom=shadow',
		spec: 'test/acceptance/table.rtl.shadow.gspec'
	});*/

	test.demo('d2l-table-demo', {
		endpoint: demoEndpoint,
		spec: 'test/acceptance/table.gspec'
	});
});
