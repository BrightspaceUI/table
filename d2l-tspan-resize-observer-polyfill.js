if (window.ResizeObserver === undefined) {
	// The more efficient ResizeObserver pollyfills don't work with Polymer 3
	// due to shadow DOM complications. Fallback to this method instead.

	window.ResizeObserver = function(callback) {
		this._callback = callback;
		this._trackedNodes = [];

		this._checkForChanges = function() {
			this._trackedNodes.forEach(function(trackedNode) {
				if (
					trackedNode.ref.offsetWidth !== trackedNode.lastWidth ||
					trackedNode.ref.offsetHeight !== trackedNode.lastHeight
				) {
					trackedNode.lastWidth = trackedNode.ref.offsetWidth;
					trackedNode.lastHeight = trackedNode.ref.offsetHeight;
					this._callback(trackedNode.ref);
				}
			}.bind(this));
			window.requestAnimationFrame(this._checkForChanges.bind(this));
		}.bind(this);
		this._checkForChanges();
	};

	ResizeObserver.prototype.observe = function(node) {
		this._trackedNodes.push({
			ref: node,
			lastWidth: node.offsetWidth,
			lastHeight: node.offsetHeight
		});
		this._callback(node);
	};

	ResizeObserver.prototype.unobserve = function(node) {
		for (var i = 0; i < this._trackedNodes.length; i++) {
			if (this._trackedNodes[i].ref === node) {
				this._trackedNodes.splice(i, 1);
				break;
			}
		}
	};
}
