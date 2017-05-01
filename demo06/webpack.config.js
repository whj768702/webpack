const path = require('path');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]

}
