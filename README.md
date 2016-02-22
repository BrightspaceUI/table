# vui-table
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com) and CSS that you can use to style tables for display of [tabular data](http://www.w3.org/TR/html5/tabular-data.html).

Tables are styled like this:

![screenshot of table with data](/screenshots/small.png)

For element layout concerns see [vui-grid-system](https://github.com/Brightspace/valence-ui-grid-system).

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-table` can be installed from [Bower][bower-url]:
```shell
bower install vui-table
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-table
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-table/table.scss';
// or...
@import "node_modules/vui-table/table.scss";
```

## Usage

To style tables, first include its `SCSS` file. Then, apply the mixin using the `vui-table` selector on the table element.

HTML:
```html
<table>
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

SCSS:
```scss
@import 'table.scss';

table {
	@include vui-table();
}
```

To style an individual table row as active, selected, or both, add the appropriate mixin to `<tr>`.

HTML:
```html
<table>
	<tr>
		<td>active</td>
	</tr>
	<tr>
		<td>selected</td>
	</tr>
	<tr>
		<td>active and selected</td>
	</tr>
</table>
```

SCSS:
```scss
tr:nth-child(1) {
	@include vui-table-row-selected($state:'selected');
}
tr:nth-child(2) {
	@include vui-table-row-selected($state:'active');
}
tr:nth-child(3) {
	@include vui-table-row-selected($state:'active-selected');
}
```

To include ascending or descending sort icons, include the appropriate mixin.

HTML:
```html
<table class="vui-table">
	<thead>
		<tr>
			<th>Ascending Column</th>
			<th>Descending Column</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>100</td>
			<td>200</td>
		</tr>
		<tr>
			<td>200</td>
			<td>100</td>
		</tr>
	</tbody>
</table>
```

SCSS:
```scss
th:nth-child(1) {
	@include vui-table-column-sort();
}
th:nth-child(2) {
	@include vui-table-column-sort('desc');
}
```

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide)
for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org)
rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-table
[bower-image]: https://img.shields.io/bower/v/vui-table.svg
[npm-url]: https://www.npmjs.org/package/vui-table
[npm-image]: https://img.shields.io/npm/v/vui-table.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-table
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-table.svg
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-table
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-table.svg
