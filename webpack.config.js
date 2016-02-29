var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: { path: __dirname + '/dist', publicPath: '/dist/', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
};