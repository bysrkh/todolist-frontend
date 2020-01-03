var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
var MiniCssExtractPlugin = require("mini-css-extract-plugin")

console.log('build a project start')

module.exports = {
    mode: "none",
    devServer: {
        port: "8080",
        contentBase: "./dist",
        historyApiFallback: true,
        proxy: {
            "/api/**": {
                target: "http://localhost:3000",
                pathRewrite: {"/api/": ""}
            }
        }
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.(png|svg|jpg|jpeg)$/,
            use: [{
                loader: "file-loader",
                options: {
                    publicPath: "./assets",
                    name: "[name].[ext]",
                    outputPath: "./assets"
                }}]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Turunkan Harga Gulu - Gulu. Banyakin Bobba",
            minify: false,
            template: "./src/index.html",
            public: {
                bootstrapCss: path.resolve(__dirname, "./public/bootstrap.min.css"),
                bootstrapJs: path.resolve(__dirname, "./public/bootstrap.min.js"),
                jQuery: path.resolve(__dirname, "./public/jquery-3.4.1.slim.min.js"),
                popper: path.resolve(__dirname, "./public/popper.min.js"),
            }
        }),
        new MiniCssExtractPlugin(),
    ]
};