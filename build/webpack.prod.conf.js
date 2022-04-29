const path = require("path");
const resolve = (r) => path.resolve(__dirname, r);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { merge } = require("webpack-merge");
const conmonConfig = require("./webpack.common.conf");
// let isAnalyzer =
//   process.argv.slice(2).length >= 5 && process.argv.slice(2)[4] == "analyzer";
const config = merge(conmonConfig, {
  output: {
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new TerserPlugin({
      extractComments: false,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 5728,
    // }),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all", // 代码分隔 公共代码分离出来
      cacheGroups: {
        // [\\/] 解决系统之间的兼容
        react: {
          test: /[\\/]react|react-dom[\\/]/,
          name: "react",
        },
      },
    },
  },
});
module.exports = config;
