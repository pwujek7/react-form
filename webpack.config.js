const PATH = require("path");
const SRC_DIR = PATH.resolve(__dirname, "src");
const DIST_DIR = PATH.resolve(__dirname, "dist");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: SRC_DIR + "/js/app.js",
  output: {
    path: DIST_DIR,
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-form",
      template: SRC_DIR + "/template.html",
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true
    })
  ]
}
