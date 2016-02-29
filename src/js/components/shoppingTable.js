var React = require('react');
var ProductTable = require('./productTable.js');
var SearchBar = require('./searchBar.js');

var ShoppingTable = React.createClass({
	getInitialState: function() {
		return {
			inStock: false,
			filterText: ''
		}
	},
    render: function() {
	    var products = this.props.products;
	    return (
		    <div>
			    <h1>My react shopping table</h1>
			    <hr/>
			    <SearchBar onUserSetFilterCondition={this.onUserSetFilterCondition} />
			    <ProductTable products={products} inStock={this.state.inStock} filterText={this.state.filterText} />
		    </div>
	    )
    },

	onUserSetFilterCondition: function(inStock, filterText) {
		this.setState({
			inStock: inStock,
			filterText: filterText
		})
	}
});

module.exports = ShoppingTable;