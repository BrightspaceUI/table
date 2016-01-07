# vui-table

This component contains [Sass mixins](http://sass-lang.com) and CSS that you
can use to style tables.

For further information on this component and other VUI components, see the
docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

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

Note: for table structures that do not make use of either `thead` or `tfoot`, the
classes `.vui-table-header` or `.vui-table-footer` can be applied to the table rows
to acheive that same effect. For example:

```html
<table class="vui-table">
	<tr class="vui-table-header">
		<th>Header column 1</th>
		<th>Header column 2</th>
	</tr>
	<tr>
		<td>row 1 column 1</td>
		<td>row 1 column 2</td>
	</tr>
	<tr>
		<td>row 2 column 1</td>
		<td>row 2 column 2</td>
	</tr>
</table>
```

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide)
for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org)
rules used in this repo.