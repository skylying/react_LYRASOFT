var SearchBar = React.createClass({
	render: function() {
		return (
			<form>
				<input
					type="text"
					placeholder="search..."
					ref="searchString"
					onChange={this.onInputChangeHandler}
					value={this.props.filterText}
				/>
				<p>
					<input
						id="stock"
						type="checkbox"
						ref="inStockCheckbox"
						onChange={this.onInputChangeHandler}
						checked={this.props.inStockOnly}
					/>
					<label htmlFor="stock">&nbsp;Display instock only</label>
				</p>
			</form>
		)
	},
	onInputChangeHandler: function() {
		this.props.userInputHandler(
			this.refs.searchString.getDOMNode().value,
			this.refs.inStockCheckbox.getDOMNode().checked
		)
	}
});