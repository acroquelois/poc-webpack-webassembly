const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(wasm|pck)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "/"
                }
            }
        ]
    },
};