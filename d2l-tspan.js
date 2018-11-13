import '../@polymer/polymer/polymer-legacy.js';
import './d2l-table-observer-behavior.js';
import ResizeObserver from '../resize-observer-polyfill/dist/ResizeObserver.es.js';
import './d2l-td.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '../@polymer/polymer/lib/legacy/polymer.dom.js';
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

			#float {
				position: absolute;
				width: 100%;
				border: var(--d2l-table-border);
				border-bottom: none;
				padding: 1rem;
				left: 0;
				box-sizing: border-box;
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
			<div id="float">
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
		}
	},
	ready: function() {
		this._sizeObserver = new ResizeObserver(this._onSizeChanged.bind(this));
	},
	attached: function() {
		var slot = dom(this.root).querySelector('#float');
		this._sizeObserver.observe(slot);
	},
	detached: function() {
		var slot = dom(this.root).querySelector('#float');
		this._sizeObserver.unobserve(slot);
	},
	_selectedChanged: function(selected) {
		this.setAttribute('aria-selected', selected.toString());
	},
	_onSizeChanged: function() {
		if (this.root.host) {
			this.root.host.style.height = this.$.float.offsetHeight + 'px';
		}
	}
});
