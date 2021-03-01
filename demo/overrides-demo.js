import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../d2l-table.js';

/**
 * @customElement
 * @polymer
 */

class OverridesDemo extends PolymerElement {
	static get template() {
		const evaluationHubActivitiesListTemplate = html`
		<custom-style>
			<style is="custom-style" include="d2l-table-style">
				d2l-table-wrapper,
				d2l-table {
					--d2l-table-border: 3px solid purple;
					--d2l-table-border-radius: 0;
					--d2l-table-header-background-color: lightblue;
					--d2l-table-body-background-color: pink;

					--d2l-table-light-border: 3px solid blue;
					--d2l-table-light-header-background-color: lavender;

					--d2l-table-row-border-color-selected: red;
					--d2l-table-row-background-color-selected: salmon;
				}
				.screenshots {
				  display: inline-block;
					margin: 20px;
				}
			</style>
			</custom-style>
			<div class="screenshots screenshot-small">
				<!-- header only -->
				<d2l-table-wrapper><table class="d2l-table">
					<thead>
					<tr>
						<th>First Name</th>
						<th>Middle Name</th>
						<th>Last Name</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Darlene</td>
						<td>Bridget</td>
						<td>Waters</td>
					</tr>
					<tr selected>
						<td>David</td>
						<td>Robert</td>
						<td>Sandoval</td>
					</tr>
					</tbody>
				</table></d2l-table-wrapper>
			</div>
			<div class="screenshots screenshot-small">
				<!-- using d2l-t* elements -->
				<d2l-table>
					<d2l-thead>
					<d2l-tr>
						<d2l-th>First Name</d2l-th>
						<d2l-th>Middle Name</d2l-th>
						<d2l-th>Last Name</d2l-th>
					</d2l-tr>
					</d2l-thead>
					<d2l-tbody>
					<d2l-tr>
						<d2l-td>Darlene</d2l-td>
						<d2l-td>Bridget</d2l-td>
						<d2l-td>Waters</d2l-td>
					</d2l-tr>
					<d2l-tr selected>
						<d2l-td>David</d2l-td>
						<d2l-td>Robert</d2l-td>
						<d2l-td>Sandoval</d2l-td>
					</d2l-tr>
					</d2l-tbody>
				</d2l-table>
			</div>
			<br>
			<div class="screenshots screenshot-small">
				<!-- header only -->
				<d2l-table-wrapper type="light"><table class="d2l-table">
					<thead>
					<tr>
						<th>First Name</th>
						<th>Middle Name</th>
						<th>Last Name</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Darlene</td>
						<td>Bridget</td>
						<td>Waters</td>
					</tr>
					<tr selected>
						<td>David</td>
						<td>Robert</td>
						<td>Sandoval</td>
					</tr>
					</tbody>
				</table></d2l-table-wrapper>
			</div>
			<div class="screenshots screenshot-small">
				<!-- using d2l-t* elements -->
				<d2l-table type="light">
					<d2l-thead>
					<d2l-tr>
						<d2l-th>First Name</d2l-th>
						<d2l-th>Middle Name</d2l-th>
						<d2l-th>Last Name</d2l-th>
					</d2l-tr>
					</d2l-thead>
					<d2l-tbody>
					<d2l-tr>
						<d2l-td>Darlene</d2l-td>
						<d2l-td>Bridget</d2l-td>
						<d2l-td>Waters</d2l-td>
					</d2l-tr>
					<d2l-tr selected>
						<d2l-td>David</d2l-td>
						<d2l-td>Robert</d2l-td>
						<d2l-td>Sandoval</d2l-td>
					</d2l-tr>
					</d2l-tbody>
				</d2l-table>
			</div>
		`;

		evaluationHubActivitiesListTemplate.setAttribute('strip-whitespace', 'strip-whitespace');
		return evaluationHubActivitiesListTemplate;
	}
	static get is() { return 'overrides-demo'; }
}

window.customElements.define(OverridesDemo.is, OverridesDemo);
