const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlTemplate = require("html-webpack-template");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

let log = console.log;

module.exports = (env, argv) => {
  // const API_URL = "http://192.168.18.2:8000"; //Worked though.
  log("#mylog#", process.env.API_URL);
  const API_URL = process.env.API_URL || "/api";
  return {
    entry: [
      "@babel/polyfill", // babel-polyfill so we don't need to import it anywhere
      "./src",
    ],
    module: {
      rules: [
        {
          // Load JS files
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          // Load CSS files
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          // Load other files
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: ["file-loader"],
        },
      ],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
      },
      minimizer: [
        // Make CSS smaller
        new TerserPlugin(),
        new OptimizeCssAssetsPlugin(),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(API_URL),
      }),
      // Skip the part where we would make a html template
      new HtmlWebpackPlugin({
        inject: false,
        template: htmlTemplate,
        appMountId: "root",
      }),
      // Extract css
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name]-[id].css",
      }),
    ],
  };
};
