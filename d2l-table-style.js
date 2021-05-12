import '@brightspace-ui/core/components/colors/colors.js';
import '@polymer/polymer/polymer-legacy.js';
import { tableStyles } from '@brightspace-ui/core/components/table/table-wrapper.js';

if (document.getElementById('d2l-table-style') === null) {
	const style = document.createElement('style');
	style.id = 'd2l-table-style';
	style.appendChild(document.createTextNode(tableStyles.cssText));
	document.head.appendChild(style);
}

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-style">
	<template>
		<style>
			d2l-thead {
				display: table-header-group;
			}
			d2l-tfoot {
				background-color: #fff;
				display: table-footer-group;
			}
			d2l-tbody {
				background-color: #fff;
				display: table-row-group;
			}
			d2l-tr {
				display: table-row;
			}
			d2l-table[type="default"] d2l-td,
			d2l-table[type="default"] d2l-th {
				border-top: var(--d2l-table-border);
				border-right: var(--d2l-table-border);
				display: table-cell;
				font-weight: inherit;
				height: 41px; /* min-height to be 62px including border */
				padding: 0.5rem 1rem;
				text-align: left;
				vertical-align: middle;
			}
			d2l-table[type="light"] d2l-td,
			d2l-table[type="light"] d2l-th {
				border-top: var(--d2l-table-border);
				display: table-cell;
				font-weight: inherit;
				height: 1.15rem; /* min-height to be 48px including border */
				padding: 0.6rem;
				text-align: left;
				vertical-align: middle;
			}

			d2l-table[type="default"] .d2l-table-cell-first,
			[dir="rtl"] d2l-table[type="default"] .d2l-table-cell-last {
				border-left: var(--d2l-table-border);
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-cell-first:not(.d2l-table-cell-last) {
				border-left: 0;
			}

			[dir="rtl"] d2l-table[type="default"] d2l-td,
			[dir="rtl"] d2l-table[type="default"] d2l-th,
			[dir="rtl"] d2l-table[type="light"] d2l-td,
			[dir="rtl"] d2l-table[type="light"] d2l-th {
				text-align: right;
			}

			d2l-table[type="default"] d2l-thead > d2l-tr > d2l-th,
			d2l-table[type="default"] d2l-tr[header] > d2l-th {
				background-color: var(--d2l-table-header-background-color);
				color: var(--d2l-color-ferrite);
				font-family: inherit;
				font-size: 0.7rem;
				line-height: 0.9rem;
				margin: 1rem 0;
				padding: 0.5rem 1rem;
				height: 27px; /* min-height to be 48px including border */
			}

			d2l-table[type="light"] d2l-thead > d2l-tr > d2l-th,
			d2l-table[type="light"] d2l-tr[header] > d2l-th {
				background-color: var(--d2l-table-header-background-color);
				color: var(--d2l-color-ferrite);
				font-family: inherit;
				font-size: 0.7rem;
				font-weight: normal;
				height: 1.15rem; /* min-height to be 48px including border */
				line-height: 0.9rem;
				padding: 0.6rem;
			}

			d2l-table[type="light"] d2l-thead > d2l-tr.d2l-table-row-first  > d2l-th,
			d2l-table[type="light"] d2l-tr[header].d2l-table-row-first  > d2l-th {
				border-top: none;
			}

			/* border radiuses */

			d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-first {
				border-top-left-radius: var(--d2l-table-border-radius);
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-first:not(.d2l-table-cell-last) {
				border-top-left-radius: 0;
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-first {
				border-top-right-radius: var(--d2l-table-border-radius);
			}

			d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-last {
				border-top-right-radius: var(--d2l-table-border-radius);
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-last:not(.d2l-table-cell-first) {
				border-top-right-radius: 0;
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-first > .d2l-table-cell-last {
				border-top-left-radius: var(--d2l-table-border-radius);
			}

			d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-first {
				border-bottom-left-radius: var(--d2l-table-border-radius);
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-first:not(.d2l-table-cell-last) {
				border-bottom-left-radius: 0;
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-first {
				border-bottom-right-radius: var(--d2l-table-border-radius);
			}

			d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-last {
				border-bottom-right-radius: var(--d2l-table-border-radius);
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-last:not(.d2l-table-cell-first) {
				border-bottom-right-radius: 0;
			}
			[dir="rtl"] d2l-table[type="default"] .d2l-table-row-last > .d2l-table-cell-last {
				border-bottom-left-radius: var(--d2l-table-border-radius);
			}

			d2l-table[type="default"] .d2l-table-row-last > * {
				border-bottom: var(--d2l-table-border);
			}

			d2l-table[type="light"] .d2l-table-row-last > * {
				border-bottom: var(--d2l-table-border);
			}

			/* selected rows */

			d2l-table[type="default"] d2l-tbody > d2l-tr[selected],
			d2l-table[type="light"] d2l-tbody > d2l-tr[selected] {
				background-color: var(--d2l-color-celestine-plus-2);
			}

			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > .d2l-table-cell-last,
			[dir="rtl"] d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > .d2l-table-cell-first {
				border-right-color: var(--d2l-table-row-border-color-selected);
			}
			[dir="rtl"] d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > .d2l-table-cell-last {
				border-right-color: var(--d2l-table-border-color);
			}
			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > .d2l-table-cell-first,
			[dir="rtl"] d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > .d2l-table-cell-last {
				border-left-color: var(--d2l-table-row-border-color-selected);
			}

			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > d2l-td,
			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] > d2l-th,
			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] + d2l-tr > d2l-td,
			d2l-table[type="default"] d2l-tbody > d2l-tr[selected] + d2l-tr > d2l-th,
			d2l-table[type="light"] d2l-tbody > d2l-tr[selected] > d2l-td,
			d2l-table[type="light"] d2l-tbody > d2l-tr[selected] > d2l-th,
			d2l-table[type="light"] d2l-tbody > d2l-tr[selected] + d2l-tr > d2l-td,
			d2l-table[type="light"] d2l-tbody > d2l-tr[selected] + d2l-tr > d2l-th {
				border-top-color: var(--d2l-table-row-border-color-selected);
			}

			d2l-table[type="default"] .d2l-table-row-last[selected] > d2l-td,
			d2l-table[type="default"] .d2l-table-row-last[selected] > d2l-th,
			d2l-table[type="light"] .d2l-table-row-last[selected] > d2l-td,
			d2l-table[type="light"] .d2l-table-row-last[selected] > d2l-th {
				border-bottom-color:var(--d2l-table-row-border-color-selected);
			}

			/* no-column-border */
			d2l-table[type="default"][no-column-border] d2l-tbody > d2l-tr > d2l-td:not(.d2l-table-cell-last),
			d2l-table[type="default"][no-column-border] d2l-tbody > d2l-tr > d2l-th:not(.d2l-table-cell-last) {
				border-right: none;
			}
			[dir="rtl"] d2l-table[type="default"][no-column-border] d2l-tbody > d2l-tr > .d2l-table-cell-last {
				border-right: none;
			}
			[dir="rtl"] d2l-table[type="default"][no-column-border] d2l-tbody > d2l-tr > .d2l-table-cell-first {
				border-right: var(--d2l-table-border);
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
