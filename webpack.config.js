const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./client/src/index.js"),
    output: {
        path: path.join(__dirname, "./client/public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.js|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader'
            },
            {

                test: /\.css$/i,
                loader:'style-loader!css-loader'

            }



        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".svg"],
        
    }
}