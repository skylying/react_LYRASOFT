var FilterableProductTable = React.createClass({
	getInitialState: function() {
	    return {
		    filterText: '',
		    inStockOnly: false
	    }
	},
	render: function() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					userInputHandler={this.userInputHandler}
				/>
				<ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products} />
			</div>
		)
	},
	userInputHandler: function(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		})
	}
});