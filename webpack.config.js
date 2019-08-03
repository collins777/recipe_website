const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    // joins our current absolute path with the path we want to output our code
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
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
