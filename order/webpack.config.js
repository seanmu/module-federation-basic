const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, "src", "index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify:
        mode === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new ModuleFederationPlugin({
      name: "restaurant",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        // "./Restaurant": "./src/RestaurantApp.jsx",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9102,
    headers: {
      "Access-Control-Allow-Origin": "*",
      https: true,
    },
  },
  optimization: {
    minimize: false,
  },
};
