**Looking for SASS-based `d2l-table`?** It's [over here](https://github.com/BrightspaceUI/table/tree/sass).

# d2l-table
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/table)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

Tables are styled like this:

A [Polymer](https://www.polymer-project.org)-based web component for D2L tables, which includes styling for tables.

![screenshot of table](test/acceptance/dumps/d2l-table-demo/objects/small.png)

![screenshot of responsive table](test/acceptance/dumps/d2l-table/objects/wide.png)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com).

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

### Sticky Headers

The header row will always be vertically sticky. To add a sticky column, you add the sticky attribute to each cell in the column. 

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

### Galen

The [Galen][Galen] tests check layout and look of table. Galen is not meant to test functionality. For example, these tests will fail if the border-radius changes. The tests use a combination of screenshots and layout assertions. The results of the tests can be found in reports/d2l-table/report.html

__Testing with galen does not currently work on Windows. Use Docker or a VM until it's fixed.__

To update the screenshots, run `npm run dump`. The screenshots will be placed under *dumps/d2l-table/objects*

* run the tests with `npm run test:galen`
* [galen.config](galen.config) can be used to change the browser that is being tested. See the [config documentation][GalenConfig]
* [table.gspec](table.gspec) contains the actual assertions. Documentation can be found [here][GalenSpec]

[bower-url]: http://bower.io/search/?q=d2l-table
[bower-image]: https://img.shields.io/bower/v/d2l-table.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/table
[ci-image]: https://img.shields.io/travis-ci/BrightspaceUI/table/master.svg
[dependencies-url]: https://david-dm.org/BrightspaceUI/table
[dependencies-image]: https://img.shields.io/david/BrightspaceUI/table.svg
[Galen]: http://galenframework.com/
[GalenConfig]: http://galenframework.com/docs/getting-started-configuration/
[GalenSpec]: http://galenframework.com/docs/reference-galen-spec-language-guide/
