/* eslint no-invalid-this: 0 */
'use strict';

var endpoint = 'http://localhost:8080/components/d2l-table/demo/simple.html';
var demoEndpoint = 'http://localhost:8080/components/d2l-table/demo/index.html';

this.specs = {
	'd2l-table': {
		name: 'd2l-table',
		endpoint: endpoint,
		file: 'test/acceptance/table.gspec'
	},
	'd2l-table-rtl': {
		name: 'd2l-table-rtl',
		endpoint: endpoint + '?dir=rtl',
		file: 'test/acceptance/table.rtl.gspec'
	},
	'd2l-table-shadow': {
		shadow: true,
		name: 'd2l-table-shadow',
		endpoint: endpoint + '?dom=shadow',
		file: 'test/acceptance/table.shadow.gspec'
	},
	'd2l-table-rtl-shadow': {
		shadow: true,
		name: 'd2l-table-rtl-shadow',
		endpoint: endpoint + '?dir=rtl&dom=shadow',
		file: 'test/acceptance/table.rtl.shadow.gspec'
	},
	'd2l-table-demo': {
		name: 'd2l-table-demo',
		endpoint: demoEndpoint,
		file: 'test/acceptance/table.gspec',
		demo: true
	}
};
