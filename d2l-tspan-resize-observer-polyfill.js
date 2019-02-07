if (window.ResizeObserver === undefined) {
	// The more efficient ResizeObserver pollyfills don't work with Polymer 3
	// due to shadow DOM complications. Fallback to this method instead.

	window.ResizeObserver = function(callback) {
		this._callback = callback;
		this._cancellationTokens = [];
	};

	ResizeObserver.prototype.observe = function(node) {
		var cancellationToken = {
			ref: node,
			cancelled: false
		};
		this._cancellationTokens.push(cancellationToken);
		this._callback(node);

		var lastWidth = node.offsetWidth;
		var lastHeight = node.offsetHeight;
		var _checkForChanges = function() {
			if (
				node.offsetWidth !== lastWidth ||
				node.offsetHeight !== lastHeight
			) {
				lastWidth = node.offsetWidth;
				lastHeight = node.offsetHeight;
				this._callback(node);
			}

			if (!cancellationToken.cancelled) {
				window.requestAnimationFrame(_checkForChanges);
			}
		}.bind(this);
		_checkForChanges();
	};

	ResizeObserver.prototype.unobserve = function(node) {
		for (var i = 0; i < this._cancellationTokens.length; i++) {
			if (this._cancellationTokens[i].ref === node) {
				this._cancellationTokens[i].cancelled = true;
				this._cancellationTokens.splice(i, 1);
				break;
			}
		}
	};
}
