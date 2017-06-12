var path = require("path");
const webpack = require('webpack');
module.exports = {
    entry: {
        app: ["./views/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "./views/dist"),
        // publicPath: "./client/dist",
        filename: "bundle.js"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx","less","css", ".json"]
    },

    module: {
        rules: [

            { test: /\.js?$/, use: ["babel-loader"] ,exclude: /node_modules/},
            { test: /\.css?$/, use: ['style-loader','css-loader'],exclude: /node_modules/ },
            { test: /\.less?$/, use: ['style-loader','css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]','less-loader'],exclude: /node_modules/},

        ]
    },
    plugins: [ //压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
