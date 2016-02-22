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

#### Row Styles

To style an individual table row as active, selected, or both, add the appropriate mixin to `<tr>`.

![screenshot of table with styled rows](/screenshots/rows.png)

HTML:
```html
<table>
	<tr class="selected">
		<td>active</td>
	</tr>
	<tr class="active">
		<td>selected</td>
	</tr>
	<tr class="active-selected">
		<td>active and selected</td>
	</tr>
</table>
```

SCSS:
```scss
.selected {
	@include vui-table-row-selected($state:'selected');
}
.active {
	@include vui-table-row-selected($state:'active');
}
.active-selected {
	@include vui-table-row-selected($state:'active-selected');
}
```

#### Header Icons

To include ascending or descending sort icons, include the appropriate mixin.

![screenshot of table with sort icons](/screenshots/sort.png)

HTML:
```html
<table>
	<thead>
		<th class="ascending">
			Ascending
		</th>
		<th class="descending">
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

SCSS:
```scss
.ascending {
	@include vui-table-column-sort();
}
.descending {
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
