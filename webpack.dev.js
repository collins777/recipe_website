const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge"); // allows us to merge webpack.common with dev/production files

module.exports = merge(common, {
  mode: "development",
  output: {
    // joins our current absolute path with the path we want to output our code
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js"
  }
});
