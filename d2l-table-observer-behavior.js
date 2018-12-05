import '@polymer/polymer/polymer-legacy.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Table = window.D2L.PolymerBehaviors.Table || {};
/** @polymerBehavior */
D2L.PolymerBehaviors.Table.LocalObserverBehavior = {
	properties: {
		__localObserver: {
			type: Object,
			value: null
		}
	},
	attached: function() {
		afterNextRender(this, function() {
			// observes children being added/removed from <slot>
			this.__localObserver = dom(this.$.slot)
				.observeNodes(function() {
					// fire event
					this.fire('d2l-table-local-observer');
				}.bind(this));
		}.bind(this));
	},
	detached: function() {
		if (this.__localObserver !== null) {
			dom(this.$.slot).unobserveNodes(this.__localObserver);
			this.__localObserver = null;
		}
	}
};
