/*
# D2L Table Column Sort
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-col-sort">
	<template strip-whitespace="">
		<d2l-icon icon="[[icon]]"></d2l-icon>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-table-col-sort',
	properties: {
		desc: {
			type: Boolean,
			value: false
		},
		icon: {
			type: String,
			computed: '_icon(desc)'
		}
	},
	_icon: function(desc) {
		return desc ? 'd2l-tier1:arrow-toggle-down' : 'd2l-tier1:arrow-toggle-up';
	}
});
