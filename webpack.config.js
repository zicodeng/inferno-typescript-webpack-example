var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/app.tsx"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name]-bundle.min.js"
    },
    
    // Enable source map for debugging webpack's output.
    devtool: "source-map",

    watch: true,

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: ["node_modules", "src"]
    },

    module: {
        loaders: [
            {
				loader: "babel-loader",
				test: /\.ts$|\.tsx$/,
				exclude: /node_modules/,
				query: {
                    presets: ["es2015"],
                    // Important plugins for transpiling TypeScript files.
                    plugins: [
                        ["babel-plugin-inferno", {"imports": true}],
                        "transform-class-properties",
                        "transform-object-rest-spread",
                        "babel-plugin-syntax-jsx"
                    ]
                }
            },
            {
                loader: "ts-loader",
                test: /\.ts$|\.tsx$/,
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
		new webpack.optimize.UglifyJsPlugin({
            minimize: true, 
            // Enable source map when uglifying code.
            sourceMap: true
        }),

        // Serve Inferno production build.
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
    ]
}