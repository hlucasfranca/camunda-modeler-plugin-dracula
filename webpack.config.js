const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./client/index.js', './style/main.less'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'style'),
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },

};