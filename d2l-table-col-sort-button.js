/*
# D2L Table Column Sort Button
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-table-col-sort.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-col-sort-button">
	<template strip-whitespace="">
		<style>
			button::-moz-focus-inner {
				border: 0;
			}
			button {
				background-color: transparent;
				border: none;
				color: inherit;
				cursor: pointer;
				display: inline-block;
				font-family: inherit;
				font-size: inherit;
				letter-spacing: inherit;
				margin: 0;
				padding: 0;
				text-decoration: none;
			}
			button:disabled {
				opacity: 0.5;
			}
			button:hover,
			button:focus {
				outline-style: none;
				text-decoration: underline;
			}
			[hidden] {
				display: none;
			}
		</style>
		<button type="button">
			<slot></slot>
			<d2l-table-col-sort hidden="[[nosort]]" desc="[[desc]]"></d2l-table-col-sort>
		</button>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-table-col-sort-button',

	properties: {
		desc: Boolean,
		nosort: {
			type: Boolean,
			value: false
		}
	}
});
