const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // builds new html file in dist folder

module.exports = {
  entry: "./src/js/index.js",
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
