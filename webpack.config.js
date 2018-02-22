const path = require("path");
const ENV = process.env.NODE_ENV || "development";
const DEV_PORT = process.env.PORT || 4444;
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowWebpackPlugin = require("flow-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: {
      app: ["./src/index.ts"]
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
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader"
        }
      ]
    },
    devtool: process.env.NODE_ENV === "production" ? null : "inline-source-map",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
        API_HOST: process.env.PROD_APIHOST
      }),
      new FlowWebpackPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: process.env.NODE_ENV === "production" ? null : true
      }),
      new CleanWebpackPlugin(["public"]),
      new HtmlWebpackPlugin({
        hash: true,
        template: "./src/index.template.ejs",
        inject: "body"
      })
    ]
  },
  {
    entry: {
      style: __dirname + "/stylesheets/style.scss" // トランスパイル対象
    },
    output: {
      path: __dirname + "/public", // 出力先ディレクトリ
      filename: "[name].css"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin("[name].css")],
    resolve: {
      alias: {
        $: path.join(__dirname, "node_modules/")
      }
    }
  }
];
