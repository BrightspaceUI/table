var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(url, name, callback) {
	page.open(url, function() {
		var clipRect = page.evaluate(function (n) {
			return document.querySelector('.screenshot-' + n)
				.getBoundingClientRect();
		}, name);

		page.clipRect = {
			top: clipRect.top,
			left: clipRect.left,
			width: clipRect.width,
			height: clipRect.height
		};
		page.render('./screenshots/' + name + '.png');
		callback();
	});
}

capture('./test/table.html', 'small', function() {
	capture('./test/table.html', 'sort', function() {
		capture('./test/table.html', 'rows', phantom.exit );
	});
});
