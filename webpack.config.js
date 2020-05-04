const path = require('path');

module.exports = {
	entry: './src/main.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 5500
	}
};