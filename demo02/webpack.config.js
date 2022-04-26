const path = require('path');

module.exports = {
  entry: ['./hello.js', './world.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
};
