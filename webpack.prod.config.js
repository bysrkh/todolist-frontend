var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Turunkan Harga Gulu - Gulu. Banyakin boba",
            minify: true,
            template: "./src/index.html"
        })
    ]
};