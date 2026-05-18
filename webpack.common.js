const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },

    {
      test: /\.css$/,
      use: [
        process.env.NODE_ENV === "production"
          ? MiniCssExtractPlugin.loader
          : "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("autoprefixer")],
            },
          },
        },
      ],
    },
  ],
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
    }),
  ],
};