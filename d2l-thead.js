import '../@polymer/polymer/polymer-legacy.js';
import './d2l-table-observer-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-thead">
	<template strip-whitespace="">
		<slot id="slot"></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-thead',
	behaviors: [
		D2L.PolymerBehaviors.Table.LocalObserverBehavior
	],
	properties: {
		role: {
			type: String,
			value: 'rowgroup',
			readonly: true,
			reflectToAttribute: true
		}
	}
});
