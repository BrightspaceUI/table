/* global polymerTests, LocalBrowserFactory, SauceBrowserFactory */
/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	chrome: new LocalBrowserFactory({ browser: 'chrome', size: '768x768' }),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
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
		platform: 'SIERRA',
		/* crashes during screenshot command on > 2.24
		 *			https://bugs.chromium.org/p/chromedriver/issues/detail?id=1770# */
		desiredCapabilities: {
			chromedriverVersion: '2.24'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	})
};

var mainlineEndpoint = 'http://localhost:8081/components/d2l-table/demo/simple.html';
var xEndpoint = 'http://localhost:8000/components/d2l-table/demo/simple.html';
var demoEndpoint = 'http://localhost:8081/components/d2l-table/demo/index.html';

polymerTests(browsers, function(test, ctx) {
	var hasShadow = ctx.driver.executeScript('return Boolean(Element.prototype.createShadowRoot)').booleanValue();
	var hasCss = ctx.driver.executeScript('return Boolean(window.CSS && window.CSS.supports("color", "var(--primary)"))').booleanValue();

	// https://github.com/webcomponents/shadydom/issues/168
	if (!hasShadow) {
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

		/*if (hasCss) { // See https://github.com/webcomponents/shadycss/blob/74577b11f20442594cedf4c5a51152dca06eb67c/src/style-settings.js#L29
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
				spec: 'test/acceptance/table.rtl.gspec',
				tags: ['mainline', 'shady', 'native-css', 'rtl'],
				vars: {
					overridePath: 'd2l-table-rtl'
				}
			});
		}*/
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

	test('d2l-table', {
		endpoint: xEndpoint + '?wc-shadydom',
		spec: 'test/acceptance/table.gspec',
		tags: ['1.x', 'shady', 'shim-css', 'ltr'],
		vars: {
			overridePath: 'd2l-table'
		}
	});

	test('d2l-table-rtl', {
		endpoint: xEndpoint + '?wc-shadydom&dir=rtl',
		spec: 'test/acceptance/table.gspec',
		tags: ['1.x', 'shady', 'shim-css', 'rtl'],
		vars: {
			overridePath: 'd2l-table-rtl'
		}
	});

	test.shadow('d2l-table-shadow', {
		endpoint: xEndpoint + '?dom=shadow',
		spec: 'test/acceptance/table.gspec',
		tags: ['1.x', 'shadow', 'shim-css', 'ltr'],
		vars: {
			overridePath: 'd2l-table'
		}
	});

	if (hasCss) {
		test('d2l-table-css', {
			endpoint: xEndpoint + '?wc-shadydom&useNativeCSSProperties=true',
			spec: 'test/acceptance/table.gspec',
			tags: ['1.x', 'shady', 'native-css', 'ltr'],
			vars: {
				overridePath: 'd2l-table'
			}
		});

		test('d2l-table-css-rtl', {
			endpoint: xEndpoint + '?wc-shadydom&dir=rtl&useNativeCSSProperties=true',
			spec: 'test/acceptance/table.gspec',
			tags: ['1.x', 'shady', 'native-css', 'rtl'],
			vars: {
				overridePath: 'd2l-table-rtl'
			}
		});

		test.shadow('d2l-table-css-shadow', {
			endpoint: xEndpoint + '?dom=shadow&useNativeCSSProperties=true',
			spec: 'test/acceptance/table.gspec',
			tags: ['1.x', 'shadow', 'native-css', 'ltr'],
			vars: {
				overridePath: 'd2l-table'
			}
		});
	}

	/*
	// This spec fails because the icon mirroring is broken in Chrome's ShadowDOM
	test.shadow('d2l-table-rtl-shadow', {
		endpoint: xEndpoint + '?dir=rtl&dom=shadow',
		spec: 'test/acceptance/table.gspec',
		vars: {
			overridePath: 'd2l-table-rtl'
		}
	});*/

	test.demo('d2l-table-demo', {
		endpoint: demoEndpoint,
		spec: 'test/acceptance/table.gspec'
	});
});
