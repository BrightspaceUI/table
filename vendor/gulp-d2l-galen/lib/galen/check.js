/* global browsers, PolymerPage, endpoint, reportStatus, spec */
/* eslint no-invalid-this: 0 */
'use strict';

load('polymer-page.js');

forAll(browsers, function() {
	test('Open in ${browserName}', function(browser) {
		var driver = browser.browserFactory(endpoint);
		try {
			var polymerPage = new PolymerPage(driver);

			if (spec.ltr) {
				polymerPage.waitForIt();
				checkLayout(driver, spec.ltr.polyfill || spec.ltr);
			}

			if (spec.rtl) {
				driver.get(endpoint + '?dir=rtl');
				polymerPage.waitForIt();
				checkLayout(driver, spec.rtl.polyfill || spec.rtl);
			}

			if (browser.hasShadow) {
				if (spec.ltr && spec.ltr.shadow) {
					driver.get(endpoint + '?dom=shadow');
					polymerPage.waitForIt();
					checkLayout(driver, spec.ltr.shadow);
				}

				if (spec.rtl && spec.rtl.shadow) {
					driver.get(endpoint + '?dom=shadow&dir=rtl');
					polymerPage.waitForIt();
					checkLayout(driver, spec.rtl.shadow);
				}
			}

			var passed = this.report.fetchStatistic().getErrors() === 0;
			reportStatus(driver, passed);
		} catch (e) {
			reportStatus(driver, false);
			throw e;
		} finally {
			driver.quit();
		}
	});
});
