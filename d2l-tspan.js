import '@polymer/polymer/polymer-legacy.js';
import './d2l-table-observer-behavior.js';
import './d2l-tspan-resize-observer-polyfill.js';
import './d2l-td.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-tspan">
	<template strip-whitespace="">
		<style>
			:host {
				margin-left: 0;
				display: table-row;
			}

			#cell {
				padding: 0;
				border: none;
			}

			.float,
			.float-with-border {
				position: absolute;
				width: 100%;
				padding: 1rem;
				left: 0;
				box-sizing: border-box;			
			}

			.float {
				border: var(--d2l-table-border);
				z-index: 0;
				border-bottom: none;
				box-shadow: 0 1px 0 var(--d2l-table-border-color);
			}

			:host([custom-border]) .float,
			.float-with-border {
				transition-property: border-color;
				transition-timing-function: ease;
				transition: border-color 0.5s, box-shadow 0.5s;
			}

			.float-with-border {
				z-index: 2;
				border: 2px solid var(--d2l-color-celestine);
				border-bottom: none;
				box-shadow: 0 2px 0 var(--d2l-color-celestine);
			}

			#float.d2l-table-row-first {
				border-top-left-radius: var(--d2l-table-border-radius);
				border-top-right-radius: var(--d2l-table-border-radius);
			}

			#float.d2l-table-row-last {
				border-bottom: var(--d2l-table-border);
				border-bottom-left-radius: var(--d2l-table-border-radius);
				border-bottom-right-radius: var(--d2l-table-border-radius);
			}
		</style>
		<d2l-td id="cell">
			<div id="float" class="float">
				<slot></slot>
			</div>
		</d2l-td>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-tspan',
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
		},
		_boundFocusOutHandler: {
			type: Function,
			value: function() {
				return this._focusOutHandler.bind(this);
			}
		},
		customBorder: {
			type: Boolean,
			value: false,
			reflectToAttribute: true,
		},
		_feedbackInFocus: {
			type: Boolean,
			value: false
		}
	},
	ready: function() {
		this._sizeObserver = new ResizeObserver(this._onSizeChanged.bind(this));
	},
	attached: function() {
		var slot = dom(this.root).querySelector('#float');
		this._sizeObserver.observe(slot);
		slot.addEventListener('focusout', this._boundFocusOutHandler);
	},
	detached: function() {
		var slot = dom(this.root).querySelector('#float');
		this._sizeObserver.unobserve(slot);
		slot.removeEventListener('focusout', this._boundFocusOutHandler);
	},
	_selectedChanged: function(selected) {
		this.setAttribute('aria-selected', selected.toString());
	},
	_onSizeChanged: function() {
		if (this.root.host) {
			this.root.host.style.height = this.$.float.offsetHeight + 'px';
		}
	},
	focus: function() {
		if (this.customBorder && !this._feedbackInFocus) {
			this._feedbackInFocus = true;
			this.addBorderToFloat();
		}
	},
	_focusOutHandler: function(event) {
		if (this.customBorder) {
			this._feedbackInFocus = false;
			this.removeBorderFromFloat();
		}
	},
	addBorderToFloat: function() {
		if (this.customBorder) {
			var float = dom(this.root).querySelector('#float');
			float.classList.add('float-with-border');
		}
	},
	removeBorderFromFloat: function() {
		if (this.customBorder && !this._feedbackInFocus) {
			var float = dom(this.root).querySelector('#float');
			float.classList.remove('float-with-border');
		}
	}
});
