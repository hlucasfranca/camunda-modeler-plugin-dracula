const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./client/index.js", "./src/styles/style.less"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "cheap-module-source-map",

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

    ],
  },

  module: {
    rules: [
      {
        include: path.resolve(__dirname, "src/styles"),
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        include: path.resolve(__dirname, "src/styles"),
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      }
    ],
  },
};
