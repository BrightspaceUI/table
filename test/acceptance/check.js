/* global PolymerPage, endpoint, reportStatus */

load('polymer-page.js');

forAll(this.browsers, function() {
	test('Open simple.html in ${browserName}', function(browser) {
		var passed = true;
		var driver = browser.browserFactory(endpoint);
		try {
			var polymerPage = new PolymerPage(driver);
			polymerPage.waitTimeout = 60000;

			polymerPage.waitForIt();
			checkLayout(driver, 'test/acceptance/table.gspec');

			driver.get(endpoint + '?dir=rtl');
			polymerPage.waitForIt();
			checkLayout(driver, 'test/acceptance/table.rtl.gspec');

			passed = this.report.fetchStatistic().getErrors() === 0;
		} catch (e) {
			passed = false;
		}

		reportStatus(driver, passed);
		driver.quit();
	});
});
