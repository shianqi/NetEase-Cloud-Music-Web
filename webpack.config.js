let path = require('path');

module.exports = {
	entry: "./app/App.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, "/node_modules/")
				],
				query: {
					presets: ['es2015','react']
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
                ]
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
                        loader: "url-loader"
                    }
				]
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				use: [
					{
                        loader: "url-loader"
                    }
				]
			}
		]
	},
	resolve: {
		extensions: ['.coffee','.js']
	}
}