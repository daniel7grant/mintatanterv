var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.styl$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader'
				]
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		port: 1325,
		disableHostCheck: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new MiniCssExtractPlugin()
	]
}
