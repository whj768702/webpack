const path = require('path');

module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
};
