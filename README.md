**Looking for SASS-based `d2l-table`?** It's [over here](https://github.com/Brightspace/d2l-table-ui/tree/sass).

# d2l-table
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

Tables are styled like this:

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for D2L tables, which includes styling for tables.

![screenshot of table](/dumps/d2l-table/objects/screenshot-small-1.png)

![screenshot of responsive table](/dumps/d2l-table/objects/screenshot-wide-1.png)

For further information on this and other D2L UI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`d2l-table` can be installed from [Bower][bower-url]:
```shell
bower install d2l-table
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-table.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-table/d2l-table.html">
</head>
```

HTML:
```html
<table is="d2l-table">
	<thead>
		<tr>
			<th>Header column 1</th>
			<th>Header column 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>row 1 column 1</td>
			<td>row 1 column 2</td>
		</tr>
		<tr>
			<td>row 2 column 1</td>
			<td>row 2 column 2</td>
		</tr>
	</tbody>
</table>
```

#### Row Styles

![screenshot of table with styled rows](/screenshots/rows.png)

HTML:
```html
<table is="d2l-table">
	<tr selected>
		<td>selected</td>
	</tr>
	<tr active>
		<td>active</td>
	</tr>
	<tr active selected>
		<td>active and selected</td>
	</tr>
</table>
```

#### Header Icons

![screenshot of table with sort icons](/screenshots/sort.png)

HTML:
```html
<table is="d2l-table">
	<thead>
		<th class="d2l-table-col-sort-asc">
			Ascending
		</th>
		<th class="d2l-table-col-sort-desc">
			Descending
		</th>
	</thead>
	<tbody>
	<tr>
		<td>123</td>
		<td>321</td>
	</tr>
	<tr>
		<td>456</td>
		<td>654</td>
	</tr>
	</tbody>
</table>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-table
[bower-image]: https://img.shields.io/bower/v/d2l-table.svg
[npm-url]: https://www.npmjs.org/package/d2l-table
[npm-image]: https://img.shields.io/npm/v/d2l-table.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-table-ui
[ci-image]: https://img.shields.io/travis-ci/Brightspace/d2l-table-ui.svg
[dependencies-url]: https://david-dm.org/brightspace/d2l-table-ui
[dependencies-image]: https://img.shields.io/david/Brightspace/d2l-table-ui.svg
