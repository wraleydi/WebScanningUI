const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    static: "./dist",
    port: 'auto',
    open: true,
    hot: true,
  },

  devtool: "inline-source-map",
});