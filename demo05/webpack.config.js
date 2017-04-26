const path = require('path');
const webpack = require('webpack');
let uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

}
