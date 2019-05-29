/* global polymerTests, LocalBrowserFactory, SauceBrowserFactory */
/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	chrome: new LocalBrowserFactory({ browser: 'chrome', size: '768x768', tags: ['sticky'] }),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10',
		size: '1400x900',
		tags: ['sticky'],
		desiredCapabilities: {
			seleniumVersion: '3.14.0'
		}
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10',
		size: '1400x900',
		tags: ['sticky'],
		desiredCapabilities: {
			seleniumVersion: '3.14.0'
		}
	}),
	// getSize doesn't work in Edge 18: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/20071753/
	// Problem occurs for Edge 18.17763
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10',
		browserVersion: '17.17134',
		tags: ['no-d2l-shadow'],
		desiredCapabilities: {
			seleniumVersion: '3.14.0'
		}
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'SIERRA',
		tags: ['sticky'],
		desiredCapabilities: {
			seleniumVersion: '3.14.0'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN',
		size: '1400x900',
		tags: ['no-d2l-shadow', 'sticky']
	})
};

var cssBrowsers = {
	cssChrome: browsers.chrome,
	cssChromeWindows: browsers.chromeWindows,
	cssedgeWindows: browsers.edgeWindows,
	cssChromeMac: browsers.chromeMac,
	cssSafariMac: browsers.safariMac
};

var mainlineEndpoint = 'http://localhost:8080/components/d2l-table/demo/simple.html';
var demoEndpoint = 'http://localhost:8080/components/d2l-table/demo/index.html';

polymerTests(browsers, function(test) {
	test('d2l-table', {
		endpoint: mainlineEndpoint + '?wc-shadydom&wc-shimcssproperties',
		spec: 'test/acceptance/table.gspec',
		tags: ['mainline', 'shady', 'shim-css', 'ltr'],
		vars: {
			overridePath: 'd2l-table'
		}
	});

	test('d2l-table-rtl', {
		endpoint: mainlineEndpoint + '?wc-shadydom&dir=rtl&wc-shimcssproperties',
		spec: 'test/acceptance/table.gspec',
		tags: ['mainline', 'shady', 'shim-css', 'rtl'],
		vars: {
			overridePath: 'd2l-table-rtl'
		}
	});

	test.demo('d2l-table-demo', {
		endpoint: demoEndpoint,
		spec: 'test/acceptance/table.gspec'
	});
});

polymerTests(cssBrowsers, function(test, ctx) {
	// See https://github.com/webcomponents/shadycss/blob/74577b11f20442594cedf4c5a51152dca06eb67c/src/style-settings.js#L29
	var hasCss = ctx.driver.executeScript('return Boolean(!navigator.userAgent.match(/AppleWebKit\\/601|Edge\\/15/) && window.CSS && window.CSS.supports("color", "var(--primary)"))').booleanValue();

	if (hasCss) {
		test('d2l-table-css', {
			endpoint: mainlineEndpoint + '?wc-shadydom&useNativeCSSProperties=true',
			spec: 'test/acceptance/table.gspec',
			tags: ['mainline', 'shady', 'native-css', 'ltr'],
			vars: {
				overridePath: 'd2l-table'
			}
		});

		test('d2l-table-css-rtl', {
			endpoint: mainlineEndpoint + '?wc-shadydom&dir=rtl&useNativeCSSProperties=true',
			spec: 'test/acceptance/table.gspec',
			tags: ['mainline', 'shady', 'native-css', 'rtl'],
			vars: {
				overridePath: 'd2l-table-rtl'
			}
		});
	}

	test.shadow('d2l-table-shadow', {
		endpoint: mainlineEndpoint + '?dom=shadow&useNativeCSSProperties=true',
		spec: 'test/acceptance/table.gspec',
		tags: ['mainline', 'shadow', hasCss ? 'native-css' : 'shim-css', 'ltr'],
		vars: {
			overridePath: 'd2l-table'
		}
	});

	/*
	// This spec fails because the icon mirroring is broken in Chrome's ShadowDOM
	test.shadow('d2l-table-rtl-shadow', {
		endpoint: mainlineEndpoint + '?dir=rtl&dom=shadow',
		spec: 'test/acceptance/table.gspec',
		vars: {
			overridePath: 'd2l-table-rtl'
		}
	});*/
});
