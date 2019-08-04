const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge"); // allows us to merge webpack.common with dev/production files

module.exports = merge(common, {
  mode: "production",
  output: {
    // joins our current absolute path with the path we want to output our code
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.[contentHash].js" // contentHash allows browsers to save most current file instead of older files in cache memory
  }
});
