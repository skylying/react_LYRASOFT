var React = require('react');

var SearchBar = React.createClass({
    render: function() {
	    return (
		    <form>
			    <input
				    type="text"
				    placeholder="search..."
				    onChange={this.onInputChange}
				    ref="filterText" />
			    <p>
				    <input type="text" type="checkbox" onChange={this.onInputChange} ref="checkbox"/>
				    &nbsp;Only show products in stock
			    </p>
		    </form>
	    )
    },
	onInputChange: function(e) {
		this.props.onUserSetFilterCondition(
			this.refs.checkbox.checked,
			this.refs.filterText.value
		)
	}
});

module.exports = SearchBar;