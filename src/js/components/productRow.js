var React = require('react');

var ProductRow = React.createClass({
    render: function() {
	    var colorClass = {color: 'red'};
	    return (
		    <tr>
			    <td style={this.props.inStock ? null : colorClass}>{this.props.productName}</td>
			    <td>{this.props.productPrice}</td>
		    </tr>
	    )
    }
});

module.exports = ProductRow;