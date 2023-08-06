const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./client/index.js', './style/client.less'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[name].min.css',
  }),
  ],

  devtool: 'cheap-module-source-map',

  optimization: {
    minimizer: [
        new TerserJSPlugin({
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: true,
        }),
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            },
        }),
    ],  
},

  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'style'),
        test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
      },
    ],
  },

};