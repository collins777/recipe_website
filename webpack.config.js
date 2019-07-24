const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    // joins our current absolute path with the path we want to output our code
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  }
};
