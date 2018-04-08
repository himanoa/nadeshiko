const path = require("path");
const ENV = process.env.NODE_ENV || "development";
const DEV_PORT = process.env.PORT || 4444;
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: {
      app: ["./src/index.tsx"],
      rssWorker: ["./src/workers/rssImportWorker.ts"]
    },
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: __dirname + "/dist",
      publicPath: "/"
    },
    watchOptions: {
      poll: true
    },
    devServer: {
      contentBase: "dist/",
      historyApiFallback: true,
      port: DEV_PORT
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"],
      alias: {
        joi: "joi-browser"
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.s?a?css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    devtool:
      process.env.NODE_ENV === "production" ? "eval" : "inline-source-map",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
        API_HOST: process.env.PROD_APIHOST
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: process.env.NODE_ENV === "production" ? false : true
      }),
      new CleanWebpackPlugin(["public"]),
      new HtmlWebpackPlugin({
        hash: true,
        template: "./src/index.template.ejs",
        inject: "body"
      })
    ]
  }
];
