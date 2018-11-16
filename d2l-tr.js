import '../@polymer/polymer/polymer-legacy.js';
import './d2l-table-observer-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-tr">
	<template strip-whitespace="">
		<slot id="slot"></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-tr',
	behaviors: [
		D2L.PolymerBehaviors.Table.LocalObserverBehavior
	],
	properties: {
		role: {
			type: String,
			value: 'row',
			readonly: true,
			reflectToAttribute: true
		},
		selected: {
			type: Boolean,
			value: false,
			reflectToAttribute: true,
			observer: '_selectedChanged'
		}
	},
	_selectedChanged: function(selected) {
		this.setAttribute('aria-selected', selected.toString());
	}
});
