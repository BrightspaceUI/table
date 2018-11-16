/**
# D2L Table

## Usage
```
	<link rel="import" href="d2l-table.html">
	<d2l-table>
		<d2l-thead>
			<d2l-tr>
				<d2l-th>Table header cell</d2l-th>
			</d2l-tr>
		</d2l-thead>
		<d2l-tfoot>
			<d2l-tr>
				<d2l-th>Table header cell</d2l-th>
			</d2l-tr>
		</d2l-tfoot>
		<d2l-tbody>
			<d2l-tr>
				<d2l-td>Table cell</d2l-td>
			</d2l-tr>
		</d2l-tbody>
	</d2l-table>
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
	<d2l-table class="ugly-table">
		<d2l-thead>
			<d2l-tr>
				<d2l-th>Table header cell</d2l-th>
			</d2l-tr>
		</d2l-thead>
		<d2l-tfoot>
			<d2l-tr>
				<d2l-th>Table header cell</d2l-th>
			</d2l-tr>
		</d2l-tfoot>
		<d2l-tbody>
			<d2l-tr>
				<d2l-td>Table cell</d2l-td>
			</d2l-tr>
		</d2l-tbody>
	</d2l-table>
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
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import '../fastdom/fastdom.js';
import './d2l-scroll-wrapper.js';
import './d2l-table-col-sort-button.js';
import './d2l-table-observer-behavior.js';
import './d2l-table-style.js';
import './d2l-table-wrapper.js';
import './d2l-tbody.js';
import './d2l-td.js';
import './d2l-tfoot.js';
import './d2l-th.js';
import './d2l-thead.js';
import './d2l-tr.js';
import './d2l-tspan.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '../@polymer/polymer/lib/utils/render-status.js';
import { dom } from '../@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table">
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

				--d2l-scroll-wrapper-inner: {
					@apply --d2l-table;
				};
			}
		</style>
		<d2l-scroll-wrapper show-actions="">
			<slot id="slot"></slot>
		</d2l-scroll-wrapper>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-table',
	behaviors: [
		D2L.PolymerBehaviors.Table.LocalObserverBehavior
	],
	listeners: {
		'd2l-table-local-observer': '_handleLocalObserver'
	},
	properties: {
		role: {
			type: String,
			value: 'table',
			reflectToAttribute: true
		}
	},
	__applyInQueue: false,
	attached: function() {
		afterNextRender(this, function() {
			this._applyClassNames();
		}.bind(this));
	},
	notifyResize: function() {
		this.$$('d2l-scroll-wrapper').notifyResize();
	},
	_applyClassNames: function() {

		// don't allow a bunch of calls to queue up
		if (this.__applyInQueue) return;
		this.__applyInQueue = true;

		fastdom.mutate(function() {
			this.__applyInQueue = false;
			var rows = this._getRowsAndCells();
			for (var i = 0; i < rows.length; i++) {
				var row = rows[i];
				if (i === 0) {
					row.elem.classList.add('d2l-table-row-first');
					if (row.elem.tagName === 'D2L-TSPAN') {
						row.elem.$.float.classList.add('d2l-table-row-first');
					}
				} else {
					row.elem.classList.remove('d2l-table-row-first');
					if (row.elem.tagName === 'D2L-TSPAN') {
						row.elem.$.float.classList.remove('d2l-table-row-first');
					}
				}
				if (i === rows.length - 1) {
					row.elem.classList.add('d2l-table-row-last');
					if (row.elem.tagName === 'D2L-TSPAN') {
						row.elem.$.float.classList.add('d2l-table-row-last');
					}
				} else {
					row.elem.classList.remove('d2l-table-row-last');
					if (row.elem.tagName === 'D2L-TSPAN') {
						row.elem.$.float.classList.remove('d2l-table-row-last');
					}
				}
				for (var j = 0; j < row.cells.length; j++) {
					var cell = row.cells[j];
					if (j === 0) {
						cell.classList.add('d2l-table-cell-first');
					} else {
						cell.classList.remove('d2l-table-cell-first');
					}
					if (j === row.cells.length - 1) {
						cell.classList.add('d2l-table-cell-last');
					} else {
						cell.classList.remove('d2l-table-cell-last');
					}
				}
			}
		}.bind(this));

	},
	_handleLocalObserver: function() {
		// descendants have been added/removed from somewhere in
		// the <slot>,so re-calculate
		this._applyClassNames();
	},
	_getRowsAndCells: function() {

		var headerRows = [];
		var bodyRows = [];
		var footerRows = [];

		function recurse(node, rows) {

			var keepGoing = true;
			var childRows = rows;

			if (node.nodeType === 1) {
				var tagName = node.tagName.toLowerCase();
				if (tagName === 'd2l-tr' || tagName === 'd2l-tspan') {
					rows.push({elem: node, cells: []});
				} else if (tagName === 'd2l-td' || tagName === 'd2l-th') {
					if (rows.length > 0) {
						rows[rows.length - 1].cells.push(node);
						keepGoing = false;
					}
				} else if (tagName === 'thead' || tagName === 'd2l-thead') {
					childRows = headerRows;
				} else if (tagName === 'tfoot' || tagName === 'd2l-tfoot') {
					childRows = footerRows;
				} else if (tagName === 'tbody' || tagName === 'd2l-tbody') {
					childRows = bodyRows;
				}
			}

			if (!keepGoing) return;

			var children = dom(node).getEffectiveChildNodes();
			for (var i = 0; i < children.length; i++) {
				recurse(children[i], childRows);
			}

		}

		recurse(this.root, bodyRows);

		var rows = headerRows.concat(bodyRows.concat(footerRows));
		return rows;

	}
});
