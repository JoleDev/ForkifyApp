const path = require ("path");
const HtmlWebpackPlugin = require ("webpack-html-plugin");

module.exports = {
    entry : "./src/js/index.js",
    output : {
        path : path.resolve (__dirname, "dist"), 
        filename : "js/bundle.js"
    }, 
    devServer : {
        contentBase: "./dist"
    },
    plugins : [
       new HtmlWebpackPlugin ({
            filename: "index.html",
            template: ".src/index.html"
     })
    ]
}