const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "bundle": "./src/main/index.ts"
  },

  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "inline-source-map",

  stats: "minimal",

  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js"
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          emitErrors: true,
          failOnHint: true,
          typeCheck: true,
        }
      },
      {
        test: /\.(js|ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.(js|ts|tsx)$/,
        loader: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          "ngtemplate-loader?relativeTo=" + path.resolve("./src/main") + "/",
          "html-loader?attrs[]=div:ng-include"
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin()
  ],

  devServer: {
    host: "0.0.0.0",
    port: 8000,
    hot: true,
    contentBase: __dirname + "/src/main",
    compress: true,
    historyApiFallback: true
  }
};
