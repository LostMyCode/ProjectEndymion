const HtmlWebpackPlugin = require("html-webpack-plugin");

// const mode = 'production'
const mode = 'development'
const masterURL = mode == 'production' ? 'https://ex-script.com/fstyle/hslo/' : 'http://127.0.0.1:5500/dist/'

module.exports = {
    devtool: "#source-map",
    entry: ['./src/index.js'],
    mode,
    output: {
        path: __dirname + '/dist',
        filename: 'Endymion.pack.[hash].js',
        publicPath: masterURL
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',   //loader名
                    options: {                //Babelの設定
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: mode == "production" ? "./src/html/index.html" : "./src/html/debug.html",
            filename: mode == "production" ? "index.php" : "index.html",
        })
    ],

    resolve: {
        extensions: [".js"]
    }
};