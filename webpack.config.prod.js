const devConfig = require("./webpack.config");
const webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = Object.assign({}, devConfig, {
  plugins: devConfig.plugins.concat([
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new BabiliPlugin()
  ])
});
