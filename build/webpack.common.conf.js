const path = require("path");
const resolve = (r) => path.resolve(__dirname, r);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsPlugin = require("@soda/friendly-errors-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
module.exports = {
  entry: resolve("../src/index.tsx"),
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        include: path.join(__dirname, "../src"),
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "images/[name].[hash:6][ext]",
          publicPath: "./",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
      extensions: ["js", "jsx", "json", "ts", "tsx"],
      exclude: "/node_modules/",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("../public/index.html"),
    }),
    new FriendlyErrorsPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  stats: "errors-only",
};
