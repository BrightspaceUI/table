import '@polymer/polymer/polymer-legacy.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Table = window.D2L.PolymerBehaviors.Table || {};

/** @polymerBehavior */
D2L.PolymerBehaviors.Table.SlotResizeObserver = {

	properties: {
		_destructor: Function
	},

	detached: function() {
		if (this._destructor) {
			this._destructor();
		}
	},

	_initSlotResizeObserver: function(slotWrapper, slot) {
		if (this._destructor) {
			this._destructor();
		}

		if (window.ResizeObserver && window.ResizeObserver.toString().indexOf('[native code') >= 0) {
			// Use native ResizeObserver
			var observer = new window.ResizeObserver(function() {
				this._onSlotSizeChanged(slotWrapper);
			}.bind(this));
			observer.observe(slotWrapper);
			this._destructor = function() {
				observer.unobserve(slotWrapper);
			};
		} else {
			// Use workaround
			var lastWidth = slotWrapper.offsetWidth;
			var lastHeight = slotWrapper.offsetHeight;
			var callback = function() {
				if (
					slotWrapper.offsetWidth === lastWidth &&
					slotWrapper.offsetHeight === lastHeight
				) {
					return;
				}
				lastWidth = slotWrapper.offsetWidth;
				lastHeight = slotWrapper.offsetHeight;
				this._onSlotSizeChanged(slotWrapper);
			}.bind(this);

			var mutationObserver = new MutationObserver(callback);
			window.addEventListener('resize', callback);
			var onSlotNodesChanged = function() {
				mutationObserver.disconnect();
				var children = slot.assignedNodes({ flatten: true });
				children.forEach(function(child) {
					mutationObserver.observe(child, {
						attributes: true,
						childList: true,
						subtree: true
					});
				});
				callback();
			};

			slot.addEventListener('slotchange', onSlotNodesChanged);
			onSlotNodesChanged(); // Safari needs this

			this._onSlotSizeChanged(slotWrapper);
			this._destructor = function() {
				window.removeEventListener('resize', callback);
				slot.removeEventListener('slotchange', onSlotNodesChanged);
				mutationObserver.disconnect();
			};
		}
	},

	_onSlotSizeChanged: function() {
		/* Override */
	}

};
