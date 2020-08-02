const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
    const mode = options.mode || 'development'
    const masterURL = mode == 'production' ? 'https://hslo.sigr.io/' : 'http://127.0.0.1:5500/dist/'

    const config = {
        devtool: mode == "development" ? "#source-map" : "",
        entry: ['./src/index.js'],
        mode,
        output: {
            path: mode == "production" ? __dirname + '/docs' : __dirname + '/dist',
            filename: 'Endymion.pack.js?[hash]',
            publicPath: masterURL
        },
    
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(jpg|png|gif|svg|mp3)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[ext]?[hash]"
                        }
                    }
                }
            ]
        },
    
        plugins: [
            new MiniCssExtractPlugin({
                filename: "assets/endymion.css?[hash]",
            }),
            new HtmlWebpackPlugin({
                template: mode == "production" ? "./src/html/index.html" : "./src/html/debug.html",
                filename: "index.html",
            })
        ],
    
        resolve: {
            extensions: [".js"]
        }
    };

    return config;
}