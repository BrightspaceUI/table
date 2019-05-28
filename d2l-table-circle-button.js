/*
# D2L Table Circle Button
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'd2l-icons/d2l-icon.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-circle-button">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
				position: absolute;
			}
			button.d2l-table-circle-button::-moz-focus-inner {
				border: 0;
			}
			button.d2l-table-circle-button {
				background-color: var(--d2l-scroll-wrapper-background-color);
				border: 1px solid var(--d2l-scroll-wrapper-border-color);
				border-radius: 50%;
				box-sizing: content-box;
				cursor: pointer;
				display: inline-block;
				font-family: inherit;
				font-size: inherit;
				height: 18px;
				line-height: 0;
				margin: 0;
				padding: 10px;
				text-decoration: none;
				width: 18px;
			}
			button.d2l-table-circle-button:hover,
			button.d2l-table-circle-button:focus {
				border-color: var(--d2l-color-celestine);
				box-shadow: 0 2px 14px 1px rgba(0,0,0,0.06);
				outline-style: none;
			}
			button.d2l-table-circle-button > d2l-icon {
				transition: color 0.3s ease;
			}
		</style>
		<button class="d2l-table-circle-button" type="button">
			<d2l-icon icon="[[icon]]"></d2l-icon>
		</button>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-table-circle-button',
	properties: {
		/**
		 * Name of icon (ex. [iconset-name:icon-id]) for underlying [Polymer iron-iconset-svg](https://github.com/PolymerElements/iron-iconset-svg)
		 */
		icon: {
			type: String,
			reflectToAttribute: true
		}
	}
});
