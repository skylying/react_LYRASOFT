var ProductRow = React.createClass({
	render: function() {

		var inStock = this.props.product.stocked;
		var name = !inStock ? <span style={{color: 'red'}}>{this.props.product.name}</span> : this.props.product.name;
		var price = !inStock ? <span style={{color: 'red'}}>{this.props.product.price}</span> : this.props.product.price;


		return (
			<tr>
				<td>{name}</td>
				<td>{price}</td>
			</tr>
		)
	}
});