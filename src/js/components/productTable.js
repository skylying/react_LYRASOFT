var React = require('react');
var ProductCategoryRow = require('./productCategoryRow.js');
var ProductRow = require('./productRow.js');

var ProductTable = React.createClass({
    render: function() {

	    var rows = [],
		    lastCategory = null;

	    var filterText = this.props.filterText,
		    inStockOnly = this.props.inStock;

	    this.props.products.forEach(function(product) {

		    if (product.name.toLowerCase().indexOf(filterText) == -1 || inStockOnly && !product.stocked) {
			    return
		    }

		    if (product.category != lastCategory) {
			    rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
		    }

		    rows.push(<ProductRow productName={product.name} productPrice={product.price} key={product.name} inStock={product.stocked} />);
		    lastCategory = product.category;
	    })

	    return (
		    <table className="table table-bordered table-striped">
			    <thead>
			        <tr>
				        <td>Name</td>
				        <td>Price</td>
			        </tr>
			    </thead>
			    <tbody>
			        {rows}
			    </tbody>
		    </table>

	    )
    }
});

module.exports = ProductTable;