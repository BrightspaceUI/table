/* eslint no-invalid-this: 0 */
'use strict';

this.dumpsDir = 'dumps';
this.endpoint = 'http://localhost:8080/components/test/demo/index.html';
this.demoEndpoint = this.endpoint;

this.spec = {
	ltr: {
		polyfill: 'specs/test.polyfill.gspec',
		shadow: 'specs/test.shadow.gspec'
	},
	rtl: {
		polyfill: 'specs/test.polyfill.rtl.gspec',
		shadow: 'specs/test.shadow.rtl.gspec'
	}
};
