# Gulp D2L Galen

Gulp plugin to help to test D2L Polymer components with Galen.

Starts `polyserve`, `sauce-connect` and runs `galen`.

## Usage

```Javascript
// galen.config.js
/* eslint no-invalid-this: 0 */
'use strict';

this.dumpsDir = 'dumps';
this.endpoint = 'http://localhost:8080/components/repo-name/demo/index.html';
this.demoEndpoint = this.endpoint;

this.spec = {
	ltr: {
		polyfill: 'specs/test.polyfill.gspec',
		shadow: 'specs/test.shadow.gspec'
	},
	rtl: {
		polyfill: 'specs/test.polyfill.rtl.gspec',
		shadow: 'specs/test.shadow.rtl.gspec'
	}
};
```

```Javascript
// gulpfile.js
const gulp = require('gulp');
const D2LGalen = require('gulp-d2l-galen');

gulp.task('test:galen:local', function() {
	return gulp.src('./galen.config.js')
		.pipe(D2LGalen({
			polyserve: {}, // https://github.com/PolymerLabs/polyserve/blob/master/src/start_server.ts
			sauce: {}, // https://github.com/bermi/sauce-connect-launcher#advanced-usage
			galen: { // https://github.com/Galeria-Kaufhof/gulp-galen#test-options
				htmlreport: 'reports'
			}
		}));
});
```
