const path = require('path');

module.exports = {
  entry: './main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options中的可以放到.babelrc配置文件中,效果一样
          //   options: {
          //     presets: [
          //       [
          //         '@babel/preset-env',
          //         {
          //           targets: {
          //             chrome: '100',
          //             // esmodules: true,
          //           },
          //         },
          //       ],
          //     ],
          //   },
        },
      },
    ],
  },
};
