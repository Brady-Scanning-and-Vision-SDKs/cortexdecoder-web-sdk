const path = require("path")
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';

    return {
        mode : isProduction ? 'production' : 'development',
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
            assetModuleFilename : '[name][ext]',
            publicPath: isProduction 
                ? '/cortexdecoder-web-sdk/cortexscan-sample_vanillajs_app_with_npm_package_import/' 
                : '/'
        },
        //Helps for debugging by having source line numbers
        devtool : 'source-map',
        devServer : {
            //hot reloading dev server

            static : {
                directory : path.resolve(__dirname , 'dist')
            },
            port : 8000,
            //Automatically open a browser tab
            open : true,
            //Auto update based on changes
            hot : true,
            compress : true,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader','css-loader','sass-loader'
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
                    test : /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource'
                },
                // wasm files should not be processed but just be emitted and we want
                // to have their public URL.
                {
                test: /\.(wasm)$/,
                type: `javascript/auto`,
                loader: `file-loader`,
                // options: {
                // if you add this, wasm request path will be https://domain.com/publicpath/[hash].wasm
                //   publicPath: `static/`,
                // },
                },
            ]
        },
        resolve : {
            extensions : ['.ts', '.js'],
        },
        plugins : [
            new HtmlWebpackPlugin({
                title : 'Code Corp Camera Scan',
                filename : 'index.html',
                template : 'src/template.html'
            })
        ]
    }
}