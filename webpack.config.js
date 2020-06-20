const path = require("path");

module.exports = {
	entry: "./frontend/src/index.js",
	output: {
		filename: "main.js",
		path: path.join(__dirname, "./frontend/static/frontend")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
