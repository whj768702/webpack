const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        vendor: './vendor/hello.js',
        main: './main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundler.js'
        })
    ]

}
