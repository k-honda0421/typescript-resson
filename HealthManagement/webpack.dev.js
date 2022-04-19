const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/food-app/react.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "webpack"),
    publicPath: "webpack",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", "ts", ".js"],
  },
};
