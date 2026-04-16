const path = require("path")
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : {
        //Setting the input directory
        bundle : path.resolve(__dirname, "src/index.js")
    },
    output : {
        //Setting the path relative
        path : path.resolve(__dirname, 'dist'),
        //To create a hash next to name
        filename : "[name][contenthash].js",
        //To delete the previous build
        clean: true,
        assetModuleFilename : '[name][ext]'
    },
    //Helps for debugging by having source line numbers
    devtool : 'source-map',
    devServer : {
        static : {
            directory : path.resolve(__dirname , 'dist')
        },
        port : 3000,
        open : true,
        hot : false,
        liveReload : true,
        compress : true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            api: 'modern'
                        }
                    }
                ]
            },
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',
                    // options : {
                    //     presets : ['@babel/preset-env']
                    // }
                }
            },
            {
                test : /\.wasm$/,
                type: `javascript/auto`,
                use: {
                    loader: `file-loader`,
                    options: {
                        // if you add this, wasm request path will be https://domain.com/publicpath/[hash].wasm
                        publicPath: `static/`,
                    },
                }
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },
    resolve : {
        extensions : ['.ts', '.js'],
        
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Code Corp Image Scan',
            filename : 'index.html',
            template : 'src/template.html'
        }),
    ]
}