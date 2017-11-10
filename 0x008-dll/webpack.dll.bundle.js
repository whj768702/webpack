
const path = require('path');
const webpack = require('webpack');
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;

module.exports = {
    entry: {
        'dll-user-2': ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist2'),
        filename: '[name].bundle.2.js'
    },

    plugins: [
        new DllBundlesPlugin({
            bundles: {
                vendor: [
                    'angular',
                    'jquery',
                    'lodash'
                ]
            },
            dllDir: './dll2'
        })
    ]
};