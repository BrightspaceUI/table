import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
import './d2l-table-style.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-table-lightweight-style">
	<template>
		<style include="d2l-table-style">
			html {
				--d2l-table-border-color: var(--d2l-color-gypsum);
				--d2l-table-border: none;
				--d2l-table-border-radius: 0;
				--d2l-table-header-background-color: #fff;
				--d2l-table-lightweight-style-border: 1px solid var(--d2l-table-border-color);
				--d2l-table-cell: {
					border-bottom: var(--d2l-table-lightweight-style-border);
					display: table-cell;
					vertical-align: middle;
					padding: 0.6rem;
					height: 1.15rem; /* min-height to be 48px including border */
				}
				--d2l-table-header: {
					background-color:var(--d2l-table-header-background-color);
					color: var(--d2l-color-ferrite);
					font-size: 0.7rem;
					font-weight: regular
					line-height: 1rem;
					padding: 0.6rem;
					height: 1.15rem; /* min-height to be 48px including border */
				}
			}

			.d2l-table-row-last > * {
				border-bottom: var(--d2l-table-lightweight-style-border);
			}

			[sticky-headers] tr[header] th,
			[sticky-headers] thead tr th {
				border-bottom: var(--d2l-table-lightweight-style-border);
			}

			[sticky-headers] tr[header]:not(.d2l-table-row-first) th,
			[sticky-headers] tr[header]:not(.d2l-table-row-first) td,
			[sticky-headers] thead tr:not(:first-child) th {
				border-bottom: var(--d2l-table-lightweight-style-border);
			}

			[sticky-headers] tbody tr:not([header]) td,
			[sticky-headers] tbody tr:not([header]) th {
				border-top: var(--d2l-table-lightweight-style-border);
				border-bottom: none;
			}

			[sticky-headers] .d2l-table > thead > tr[header] + tr:not([header])[selected] > td,
			[sticky-headers] .d2l-table > tbody > tr[header] + tr:not([header])[selected] > td,
			[sticky-headers] tr[header] + tr:not([header])[selected] th,
			[sticky-headers] tbody tr[selected]:first-child td,
			[sticky-headers] tbody tr[selected]:first-child th {
				border-top: var(--d2l-table-lightweight-style-border);
				border-top-color: var(--d2l-table-row-border-color-selected);
			}

			[sticky-headers] .d2l-table tr[selected] th,
			[sticky-headers] .d2l-table tr[selected] td {
				border-top: var(--d2l-table-lightweight-style-border);
				border-top-color: var(--d2l-table-row-border-color-selected);
			}

			[sticky-headers] .d2l-table > tbody > tr.d2l-table-row-last > td,
			[sticky-headers] .d2l-table > tbody > tr.d2l-table-row-last > th {
				border-bottom: var(--d2l-table-lightweight-style-border);
			}

			[sticky-headers] .d2l-table > tbody > tr.d2l-table-row-first.d2l-table-row-last > td.d2l-table-cell-first.d2l-table-cell-last {
				border-top: var(--d2l-table-lightweight-style-border);
				border-bottom: var(--d2l-table-lightweight-style-border);
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
