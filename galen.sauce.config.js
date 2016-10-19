/* global sauceBrowserFactory, load */
/* eslint no-invalid-this: 0 */
'use strict';

/* Config for galen tests to use
 * Usage
 *  load('galen.sauce.config.js')
 *  forAll(browsers, function() {
 *    test('Open in ${browserName}', function(browser) {
 * 	    var driver = browser.browserFactory(endpoint);
 *    });
 *  });
 * System Properties
 * USERNAME          sauce username
 * ACCESS_KEY        sauce access key
 * TUNNEL_IDENTIFIER sauce connect tunnel_identifier
 * NAME              sauce test name
 * BUILD             sauce build number
 */

load('galen.config.js');

this.browsers = {
	chromeWindows: {
		browserName: 'chrome-windows',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'Chrome',
			platform: 'WIN10',
			size: '1400x900'
		}),
		hasShadow: true
	},
	firefoxWindows: {
		browserName: 'firefox-windows',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'Firefox',
			platform: 'WIN10',
			size: '1400x900'
		})
	},
	ie11Windows: {
		browserName: 'ie11-windows',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'internet explorer',
			version: '11',
			platform: 'WIN10',
			size: '1400x900'
		})
	},
	ie10Windows: {
		browserName: 'ie10-windows',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'internet explorer',
			version: '10',
			platform: 'WIN8',
			size: '1400x900'
		})
	},
	edgeWindows: {
		browserName: 'edge-windows',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'microsoftedge',
			platform: 'WIN10',
			size: '1400x900'
		})
	},
	chromeMac: {
		browserName: 'chrome-mac',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'Chrome',
			platform: 'EL_CAPITAN',
			size: '1400x900'
		}),
		hasShadow: true
	},
	safariMac: {
		browserName: 'safari-mac',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'Safari',
			platform: 'EL_CAPITAN',
			size: '1400x900'
		})
	},
	firefoxMac: {
		browserName: 'firefox-mac',
		browserFactory: sauceBrowserFactory.bind(this, {
			browser: 'Firefox',
			platform: 'EL_CAPITAN',
			size: '1400x900'
		})
	}
};
