const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // builds new html file in dist folder

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    // joins our current absolute path with the path we want to output our code
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.[contentHash].js" // contentHash allows browsers to save most current file instead of older files in cache memory
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html" // build new html file in dist modeled after this file
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // injects styles into dom
          "css-loader", // compiles css into common js
          "sass-loader" // compiles scss into css
        ]
      }
    ]
  }
};
