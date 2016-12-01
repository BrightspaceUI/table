/* global polymerTests */
/* eslint no-invalid-this: 0 */
'use strict';

var endpoint = 'http://localhost:8080/components/d2l-table/demo/simple.html';
var demoEndpoint = 'http://localhost:8080/components/d2l-table/demo/index.html';

polymerTests(this.browsers, function(test) {
	test('d2l-table', {
		endpoint: endpoint,
		spec: 'test/acceptance/table.gspec'
	});

	test('d2l-table-rtl', {
		endpoint: endpoint + '?dir=rtl',
		spec: 'test/acceptance/table.rtl.gspec'
	});

	test.shadow('d2l-table-shadow', {
		endpoint: endpoint + '?dom=shadow',
		spec: 'test/acceptance/table.shadow.gspec'
	});

	/*
	// This spec fails because the icon mirroring is broken in Chrome's ShadowDOM
	test.shadow('d2l-table-rtl-shadow', {
		endpoint: endpoint + '?dir=rtl&dom=shadow',
		spec: 'test/acceptance/table.rtl.shadow.gspec'
	});*/

	test.demo('d2l-table-demo', {
		endpoint: demoEndpoint,
		spec: 'test/acceptance/table.gspec'
	});
});
