/* global createGridDriver, System, load */
/* eslint no-invalid-this: 0 */
'use strict';

function sauceReportStatus(driver, status) {
	driver.executeScript('sauce:job-result=' + (status ? 'passed' : 'failed'));
}

function sauceBrowserFactory(settings, url) {
	settings = settings || {};
	settings.desiredCapabilities = settings.desiredCapabilities || {};
	settings.desiredCapabilities.tunnelIdentifier = System.getProperty('TUNNEL_IDENTIFIER');
	settings.desiredCapabilities.name = System.getProperty('NAME');
	settings.desiredCapabilities.build = System.getProperty('BUILD');
	settings.desiredCapabilities.tags = 'galen';

	var USERNAME = System.getProperty('USERNAME');
	var ACCESS_KEY = System.getProperty('ACCESS_KEY');
	var driver = createGridDriver('http://' + USERNAME + ':' + ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub', settings);
	driver.get(url);
	return {
		driver: driver,
		reportStatus: sauceReportStatus
	};
}

this.sauceBrowserFactory = sauceBrowserFactory;
