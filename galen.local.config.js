/* global createDriver */

this.endpoint = 'http://localhost:8080/components/d2l-table/demo/simple.html';
this.demoEndpoint = 'http://localhost:8080/components/d2l-table/demo/index.html';

function factory(args, url) {
	return createDriver.apply(this, [url].concat(args));
}

this.reportStatus = function() {};

this.browsers = {
	phantomjs: {
		browserName: 'phantomjs',
		browserFactory: factory.bind(this, ['1400x768', 'phantomjs'])
	}
};
