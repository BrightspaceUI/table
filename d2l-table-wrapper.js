/**
# D2L Table

## Usage
```
	<link rel="import" href="d2l-table.html">
	<d2l-table-wrapper>
		<table class="d2l-table">
		<thead>
			<tr>
				<th>Table header cell</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<th>Table header cell</th>
			</tr>
		</tfoot>
		<tbody>
			<tr>
				<td>Table cell</td>
			</tr>
		</tbody>
		</table>
	</d2l-table-wrapper>
```

### Table attributes

Attribute | Description
----------|-------------
`selectable` | Add hover effect for rows

### Row Attributes

Attribute | Description
----------|-------------
`selected` | Apply selected style
`active` | Apply active style
`header` | Apply header style
`last-row` | This row is to be treated as the bottom row in the case where CSS can't detect it. This should only happen if the last row(s) are hidden from view, and the table has no footer

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--d2l-table-border-color` | Border Color | `var(--d2l-color-mica)` |
`--d2l-table-border-radius` | Corner Border Radius | `0.3rem` |
`--d2l-table-border` | Border | `1px solid var(--d2l-table-border-color);` |
`--d2l-table-header-background-color` | Header background color (th elements under `<thead>` or `<tr header>`) | `var(--d2l-color-regolith);` |
`--d2l-table-body-background-color` | Body background color (non-header) | `#fff` |
`--d2l-table-row-background-color-active` | Active row background color | `var(--d2l-color-celestine-plus-2)` |
`--d2l-table-row-border-color-selected` | Selected row border color | `var(--d2l-color-celestine-plus-1)` |
`--d2l-table-row-border-color-active-selected` | Active and Selected row border color | `var(--d2l-color-celestine-plus-1)` |
`--d2l-table-row-background-color-active-selected` | Active and Selected row background color | `#EBF5FC` |
`--d2l-table-row-background-color-selected` | Selected row background color | `var(--d2l-color-celestine-plus-2)` |
`--d2l-table-border-overflow` | Border to show when the table overflows | `dashed 1px #d3d9e3` |

```
	<link rel="import" href="d2l-table.html">
	<custom-style>
	<style is="custom-style">
		.ugly-table {
			--d2l-table-border-color: purple
			--d2l-table-border-radius: 0;
			--d2l-table-header-background-color: grey;
			--d2l-table-body-background-color: blue;
			--d2l-table-row-background-color-active: black;
			--d2l-table-row-border-color-active-selected: red;
			--d2l-table-row-background-color-active-selected: red;
			--d2l-table-row-border-color-selected: black;
			--d2l-table-row-background-color-selected: black;
			--d2l-table-border-overflow: none;
		}

		/* tweak default border radius for all tables on the page. No d2l-table-wrapper
		   element is required *\/
		html {
			--d2l-table-border-radius: 0.4rem;
		}
	</style>
	</custom-style>
	<d2l-table-wraper class="ugly-table">
		<table class="d2l-table">
			<thead>
				<tr>
					<th>Table header cell</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>Table header cell</th>
				</tr>
			</tfoot>
			<tbody>
				<tr>
					<td>Table cell</td>
				</tr>
			</tbody>
		</table>
	</d2l-table-wrapper>
```

@demo demo/index.html	  Table demo
@demo demo/index.rtl.html  RTL Table demo
@demo demo/responsive.html Identical tables with different widths
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'fastdom/fastdom.js';
import './d2l-scroll-wrapper.js';
import './d2l-table-col-sort-button.js';
import './d2l-table-observer-behavior.js';
import './d2l-table-style.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-wrapper">
	<template strip-whitespace="">
		<style>
			:host {
				background-color: transparent;
				display: block;
				width: 100%;
				--d2l-table-border-color: var(--d2l-color-mica);
				--d2l-table-header-background-color: var(--d2l-color-regolith);
				--d2l-table-border-overflow: dashed 1px #d3d9e3;
			}
			d2l-scroll-wrapper {
				--d2l-scroll-wrapper-h-scroll: {
					border-left: var(--d2l-table-border-overflow);
					border-right: var(--d2l-table-border-overflow);
				};
				--d2l-scroll-wrapper-h-scroll-focus: {
					border-left: var(--d2l-table-border-overflow-focus);
					border-right: var(--d2l-table-border-overflow-focus);
				};
				--d2l-scroll-wrapper-left: {
					border-left: none;
				};
				--d2l-scroll-wrapper-right: {
					border-right: none;
				};
				--d2l-scroll-wrapper-border-color: var(--d2l-table-border-color);
				--d2l-scroll-wrapper-background-color: var(--d2l-table-header-background-color);
			}
		</style>
		<d2l-scroll-wrapper show-actions="" is-sticky$="[[stickyHeaders]]">
			<slot id="slot"></slot>
		</d2l-scroll-wrapper>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-table-wrapper',
	behaviors: [
		D2L.PolymerBehaviors.Table.LocalObserverBehavior
	],
	listeners: {
		'd2l-table-local-observer': '_handleLocalObserver'
	},
	properties: {
		stickyHeaders: {
			type: Boolean,
			value: false,
			observer: '_applyStickyHeaders',
			reflectToAttribute: true
		}
	},
	__applyInQueue: false,
	__tableObserver: null,
	attached: function() {
		afterNextRender(this, function() {
			this._registerTableObserver();
			this._applyClassNames();
		}.bind(this));
	},
	detached: function() {
		if (this.__tableObserver !== null) {
			this.__tableObserver.disconnect();
			this.__tableObserver = null;
		}
	},
	notifyResize: function() {
		this.$$('d2l-scroll-wrapper').notifyResize();
	},
	_applyClassNames: function() {

		// don't allow a bunch of calls to queue up
		if (this.__applyInQueue) return;

		var table = this.queryEffectiveChildren('.d2l-table');
		if (!table) return;

		this.__applyInQueue = true;

		fastdom.measure(function() {

			this.__applyInQueue = false;

			var firstRow = null;
			var lastRow = null;
			for (var i = 0; i < table.rows.length; i++) {
				// checking offsetParent is a measure
				if (table.rows[i].offsetParent !== null) {
					if (firstRow === null) {
						firstRow = table.rows[i];
					}
					lastRow = table.rows[i];
				}
			}

			fastdom.mutate(function() {

				for (var j = 0; j < table.rows.length; j++) {

					var row = table.rows[j];
					if (row === firstRow) {
						firstRow.classList.add('d2l-table-row-first');
					} else {
						row.classList.remove('d2l-table-row-first');
					}
					if (row === lastRow) {
						lastRow.classList.add('d2l-table-row-last');
					} else {
						row.classList.remove('d2l-table-row-last');
					}

					for (var k = 0; k < row.cells.length; k++) {
						// would be great to use classList.toggle() here,
						// but IE11 doesn't support it
						if (k === 0) {
							row.cells[k].classList.add('d2l-table-cell-first');
						} else {
							row.cells[k].classList.remove('d2l-table-cell-first');
						}
						if (k === row.cells.length - 1) {
							row.cells[k].classList.add('d2l-table-cell-last');
						} else {
							row.cells[k].classList.remove('d2l-table-cell-last');
						}
					}

				}

			}.bind(this));

		}.bind(this));

	},
	_applyStickyHeaders: function(val) {
		if (!val) {
			return;
		}
		this._applySubheadingTop();
		this._applyBodyClass();
	},
	_applySubheadingTop: function() {
		/* It appears Polymer 1 calls this observer before everything is
			finished rendering so it gets the incorrect clientHeight. In
			Polymer 2 this works without the afterNextRender.
		*/
		afterNextRender(this, function() {
			var topHeader = this.querySelector('.d2l-table tr[header]:first-child th:not([rowspan]), .d2l-table thead tr:first-child th:not([rowspan])');
			if (!topHeader) {
				return;
			}

			var ths = this.querySelectorAll('.d2l-table tr[header]:not(:first-child) th, .d2l-table thead tr:not(:first-child) th');
			for (var i = 0; i < ths.length; i++) {
				ths[i].style.top = topHeader.clientHeight - 3 + 'px';
			}
		}.bind(this));
	},
	_applyBodyClass: function() {
		if (document.body.classList.contains('d2l-table-sticky-headers')) {
			return;
		}

		document.body.classList.add('d2l-table-sticky-headers');
	},
	_handleLocalObserver: function() {
		// children have been added/removed from <slot>,
		// try again to register observer on <table> element
		this._registerTableObserver();
	},
	_registerTableObserver: function() {

		if (this.__tableObserver) return;

		var table = this.queryEffectiveChildren('.d2l-table');
		if (!table) return;

		// any time a mutation occurs, re-calculate class names
		this.__tableObserver = new MutationObserver(function() {
			this._applyClassNames();
		}.bind(this));

		// observes mutations to <table>'s direct children and also
		// its subtree (rows or cells added/removed to any descendant)
		this.__tableObserver.observe(table, {
			childList: true,
			subtree: true
		});

	}
});
