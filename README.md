**Looking for SASS-based `d2l-table`?** It's [over here](https://github.com/BrightspaceUI/table/tree/sass).

# d2l-table

Tables are styled like this:

A [Polymer](https://www.polymer-project.org)-based web component for D2L tables, which includes styling for tables.

![screenshot of table](test/acceptance/dumps/d2l-table-demo/objects/small.png)

![screenshot of responsive table](test/acceptance/dumps/d2l-table/objects/wide.png)

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

`d2l-table` can be installed from [Bower][bower-url]:
```shell
bower install d2l-table
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-table.html`:

```html
<head>
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-table/d2l-table.html">
	<!-- Alternatively use the style include only in custom components that use d2l-table -->
	<custom-style>
		<style include="d2l-table-style"></style>
	</custom-style>
</head>
```

HTML:
```html
<!-- use the style include in custom components -->
<style include="d2l-table-style"></style>
<d2l-table-wrapper><table class="d2l-table">
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
</table></d2l-table-wrapper>
```

Alternatively, use the d2l-t* elements (allows use of dom-repeat, etc.)
HTML:
```html
<!-- d2l-t* elements still need the d2l-table-style,
since the table styling can't be done with polyfilled css mixins yet -->
<style include="d2l-table-style"></style>
<d2l-table>
	<d2l-thead>
		<d2l-tr>
			<d2l-th>Header column 1</d2l-th>
			<d2l-th>Header column 2</d2l-th>
		</d2l-tr>
	</d2l-thead>
	<d2l-tbody>
		<d2l-tr>
			<d2l-td>row 1 column 1</d2l-td>
			<d2l-td>row 1 column 2</d2l-td>
		</d2l-tr>
		<d2l-tr>
			<d2l-td>row 2 column 1</d2l-td>
			<d2l-td>row 2 column 2</d2l-td>
		</d2l-tr>
	</d2l-tbody>
</d2l-table>
```

The `d2l-tr` element does not support the `colspan` attribute. To create a row containing only a single cell that
spans the entire width of the table, use `d2l-tspan` instead. Note that `d2l-tspan` rows are unaffected by horizontal
scrolling.

HTML:
```html
<style include="d2l-table-style"></style>
<d2l-table>
	<d2l-tbody>
		<d2l-tr>
			<d2l-td>row 1 column 1</d2l-td>
			<d2l-td>row 1 column 2</d2l-td>
		</d2l-tr>
		<d2l-tspan>
			row 2 (spans entire table width)
		</d2l-tspan>
		<d2l-tr>
			<d2l-td>row 3 column 1</d2l-td>
			<d2l-td>row 3 column 2</d2l-td>
		</d2l-tr>
	</d2l-tbody>
</d2l-table>
```

#### Row Styles

![screenshot of table with styled rows](test/acceptance/dumps/d2l-table-demo/objects/rows.png)

HTML:
```html
<!-- use the style include in custom components -->
<style include="d2l-table-style"></style>
<d2l-table-wrapper><table class="d2l-table">
	<tr selected>
		<td>selected</td>
	</tr>
	<tr active>
		<td>active</td>
	</tr>
	<tr active selected>
		<td>active and selected</td>
	</tr>
</table></d2l-table-wrapper>
```

#### Header Icons

![screenshot of table with sort icons](test/acceptance/dumps/d2l-table-demo/objects/sort.png)

HTML:
```html
<!-- use the style include in custom components -->
<style include="d2l-table-style"></style>
<d2l-table-wrapper><table class="d2l-table">
	<thead>
		<th>
			<d2l-table-col-sort-button>Ascending</d2l-table-col-sort-button>
		</th>
		<th>
			<d2l-table-col-sort-button desc>Descending</d2l-table-col-sort-button>
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
</table></d2l-table-wrapper>
```

#### Light Style - Full Design Spec Still In Progress

<img src="/images/light.png?raw=true" width="350">

Lightweight data tables are used to display tabular data in rows when column dividers or individual cell colors are not required. They are best suited for data that is primarily organized by row while still allowing users to order the rows by using column header sorting.

You can get this style by setting the `type` attribute to `light`.

HTML:
```html
<!-- use the style include in custom components -->
<style include="d2l-table-style"></style>
<d2l-table-wrapper type="light"><table class="d2l-table">
	...
</table></d2l-table-wrapper>

<style include="d2l-table-style"></style>
<d2l-table type="light">
	<d2l-tbody>
		...
	</d2l-tbody>
</d2l-table>
```

### Sticky Headers

Note: This feature is only works with browsers that support `position: sticky` which currently includes:
 - Chrome 56+
 - FF 59+
 - Safari 8+

Edge 16 is currently not working due to bugs with `position: sticky;` and right-to-left as well as border issues.

The header row will always be vertically sticky. To add a sticky column, you add the `sticky` attribute to each cell in the column.

```html
<d2l-table-wrapper sticky-headers>
<table>
	<thead>
		<tr>
			<th sticky>Sticky Column</th>
			<th>Not sticky column</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th sticky>Sticky Column</th>
			<th>Not sticky column</th>
		</tr>
	</tbody>
</table>
```
## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `master`. Read on for more details...

The [sematic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/master/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
