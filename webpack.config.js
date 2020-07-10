const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
    const mode = options.mode || 'development'
    const masterURL = mode == 'production' ? 'https://ex-script.com/fstyle/hslo/' : 'http://127.0.0.1:5500/dist/'

    const config =  {
        devtool: mode == "development" ? "#source-map" : "",
        entry: ['./src/index.js'],
        mode,
        output: {
            path: __dirname + '/dist',
            filename: mode == "production" ? 'Endymion.pack.[hash].js' : "Endymion.pack.js",
            publicPath: mode == "production" ? masterURL + "Endymion/" : masterURL
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

    return config;
}