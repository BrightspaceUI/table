/* global PolymerPage, endpoint, demoEndpoint */

load('../../galen.local.config.js');
load('polymer-page.js');
forAll(this.browsers, function() {
	test('Open simple.html in ${browserName}', function(browser) {
		var driver = browser.browserFactory(endpoint);
		var polymerPage = new PolymerPage(driver);
		polymerPage.waitTimeout = 60000;

		polymerPage.waitForIt();
		dumpPage({
			driver: driver,
			name: 'D2L Table',
			spec: 'test/acceptance/table.gspec',
			exportPath: 'test/acceptance/dumps/d2l-table'
		});

		driver.get(endpoint + '?dir=rtl');
		polymerPage.waitForIt();
		dumpPage({
			driver: driver,
			name: 'D2L Table RTL',
			spec: 'test/acceptance/table.rtl.gspec',
			exportPath: 'test/acceptance/dumps/d2l-table-rtl'
		});

		driver.get(demoEndpoint);
		polymerPage.waitForIt();
		dumpPage({
			driver: driver,
			name: 'D2L Table Demo',
			spec: 'test/acceptance/table.gspec',
			exportPath: 'test/acceptance/dumps/d2l-table-demo'
		});
	});
});
