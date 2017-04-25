const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        // loaders: [
            // {test: /\.css$/, loader: 'style-loader!css-loader'}
        // ]
        rules: [
            {
                test: /\.css$/,
                use: [
                    // { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ]
    }

}
