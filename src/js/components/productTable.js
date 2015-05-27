var ProductTable = React.createClass({
	render: function() {

		var currentCategory = null;
		var rows = [];
		var inStockOnly = this.props.inStockOnly;
		var filterText = this.props.filterText;

		this.props.products.forEach(function(product) {

			if (inStockOnly && !product.stocked || product.name.toLowerCase().indexOf(filterText) == -1) {
				return
			}

			if (product.category !== currentCategory) {
				rows.push(<ProductCategoryRow catetory={product.category} />);
				currentCategory = product.category;
			}

			rows.push(<ProductRow product={product} />);
		});

		return (
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
});