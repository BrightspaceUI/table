import '@polymer/polymer/polymer-legacy.js';
import './d2l-table-observer-behavior.js';
import './d2l-td.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import ResizeObserver from 'resize-observer-polyfill/dist/ResizeObserver.es.js';

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

			.d2l-tspan-float {
				position: absolute;
				width: 100%;
				padding: 1rem;
				left: 0;
				box-sizing: border-box;
				z-index: 0;
			}

			:host([type="default"]) .d2l-tspan-float {
				border: var(--d2l-table-border);
				border-bottom: none;
				box-shadow: 0 1px 0 var(--d2l-table-border-color);
			}

			:host([type="light"]) .d2l-tspan-float {
				border-top: var(--d2l-table-light-border);
			}

			:host([focused-styling]) .d2l-tspan-float {
				transition-property: border-color;
				transition-timing-function: ease;
				transition: border-color 0.5s, box-shadow 0.5s;
			}

			:host([focused-styling]) .d2l-tspan-float:hover,
			:host([_feedback-in-focus]) .d2l-tspan-float {
				z-index: 2;
				border: 2px solid var(--d2l-color-celestine);
				border-bottom: none;
				box-shadow: 0 2px 0 var(--d2l-color-celestine);
			}

			:host([type="default"]) #float.d2l-table-row-first {
				border-top-left-radius: var(--d2l-table-border-radius);
				border-top-right-radius: var(--d2l-table-border-radius);
			}

			:host([type="default"]) #float.d2l-table-row-last {
				border-bottom: var(--d2l-table-border);
				border-bottom-left-radius: var(--d2l-table-border-radius);
				border-bottom-right-radius: var(--d2l-table-border-radius);
			}

			:host([type="light"]) #float.d2l-table-row-last {
				border-bottom: var(--d2l-table-light-border);
			}

			#resize-detector {
				display: block;
				width: 100%;
			}
		</style>
		<d2l-td id="cell">
			<div id="float" class="d2l-tspan-float">
				<div id="resize-detector">
					<slot></slot>
				</div>
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
		type: {
			type: String,
			value: 'default',
			reflectToAttribute: true
		},
		_boundFocusOutHandler: {
			type: Function,
			value: function() {
				return this._focusOutHandler.bind(this);
			}
		},
		_boundFocusInHandler: {
			type: Function,
			value: function() {
				return this._focusInHandler.bind(this);
			}
		},
		focusedStyling: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		_feedbackInFocus: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		}
	},
	ready: function() {
		this._resizeObserver = new ResizeObserver(()=> this._onSizeChanged())
	},
	attached: function() {
		const resizeDetector = this.$['resize-detector'];
		this._resizeObserver.observe(resizeDetector);
		var slot = dom(this.root).querySelector('#float');
		if (this.focusedStyling) {
			slot.addEventListener('focusout', this._boundFocusOutHandler);
			slot.addEventListener('focusin', this._boundFocusInHandler);
		}
		this.root.host.style.height = this.$.float.offsetHeight + 'px';
	},
	detached: function() {
		if (this._resizeObserver) {
			this._resizeObserver.disconnect();
			this._resizeObserver = null;
		}
		var slot = dom(this.root).querySelector('#float');
		if (this.focusedStyling) {
			slot.removeEventListener('focusout', this._boundFocusOutHandler);
			slot.removeEventListener('focusin', this._boundFocusInHandler);
		}
	},
	_selectedChanged: function(selected) {
		this.setAttribute('aria-selected', selected.toString());
	},
	_onSizeChanged: function() {
		this.root.host.style.height = this.$.float.offsetHeight + 'px';
	},
	_focusInHandler: function() {
		if (this.focusedStyling && !this._feedbackInFocus) {
			this._feedbackInFocus = true;
		}
	},
	_focusOutHandler: function() {
		if (this.focusedStyling) {
			this._feedbackInFocus = false;
		}
	}
});
