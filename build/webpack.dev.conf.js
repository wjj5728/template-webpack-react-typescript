const path = require("path");
const resolve = (r) => path.resolve(__dirname, r);
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");
const conmonConfig = require("./webpack.common.conf");
const config = merge(conmonConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin({
      overlay: false,
    }),
  ],
  devServer: {
    // compress: true,
    // open: true,
    port: 7070,
    hot: true,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },
});
module.exports = config;
