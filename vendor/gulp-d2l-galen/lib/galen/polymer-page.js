/* eslint no-invalid-this: 0 */
'use strict';

GalenPages.settings.cacheWebElements = false;

this.PolymerPage = $page('Polymer page', {
	body: 'xpath: //body[not(@unresolved)]'
});
