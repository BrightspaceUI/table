import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-td">
	<template strip-whitespace="">
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-td',
	properties: {
		role: {
			type: String,
			value: 'cell',
			reflectToAttribute: true
		}
	}
});
