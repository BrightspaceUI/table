/* global browsers, spec, dumpsDir, PolymerPage, endpoint, demoEndpoint */
'use strict';

load('polymer-page.js');
forAll(browsers, function() {
	test('Open simple.html in ${browserName}', function(browser) {
		var driver = browser.browserFactory(endpoint).driver;

		try {
			var polymerPage = new PolymerPage(driver);
			polymerPage.waitTimeout = 60000;

			polymerPage.waitForIt();
			if (spec.ltr) {
				dumpPage({
					driver: driver,
					name: 'LTR',
					spec: spec.ltr.polyfill || spec.ltr.shadow || spec.ltr,
					exportPath: dumpsDir + '/ltr'
				});
			}

			if (spec.rtl) {
				driver.get(endpoint + '?dir=rtl');
				polymerPage.waitForIt();
				dumpPage({
					driver: driver,
					name: 'RTL',
					spec: spec.rtl.polyfill || spec.rtl.shadow || spec.rtl,
					exportPath: dumpsDir + '/rtl'
				});
			}

			if (demoEndpoint !== endpoint) {
				driver.get(demoEndpoint);
				polymerPage.waitForIt();
				dumpPage({
					driver: driver,
					name: 'Demo',
					spec: spec.ltr.polyfill || spec.ltr.shadow || spec.ltr,
					exportPath: dumpsDir + '/demo'
				});
			}
		} finally {
			driver.quit();
		}
	});
});
