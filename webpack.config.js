const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "bundle": "./src/main/index.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js"
        ]
    },
    stats: "minimal",
    module: {
        rules: [
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
            },

        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            templateContent: "<app></app>"
        })
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