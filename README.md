# vui-table
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com) and CSS that you
can use to style tables for display of [tabular data](http://www.w3.org/TR/html5/tabular-data.html).

For element layout concerns see [vui-grid-system](https://github.com/Brightspace/valence-ui-grid-system).
For further information on this component and other VUI components, see the docs
at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

Install from NPM:
```shell
npm install vui-table
```

Install from Bower:
```shell
bower install vui-table
```

## Usage

To style tables, first include its `SCSS` file. Then, apply the mixin using the
`vui-table` selector on the table element.

### Mixin
```scss
@import 'table.scss';

table {
	@include vui-table();
}
```

### Class name
```html
<table class="vui-table">
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