const HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    Path = require('path'),
    glob = require('glob'),
    fs = require('fs'),
    os = require('os'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true',

    entries = {}, // js入口
    newEntries = {},
    buildRoot = 'build/',
    jsRoot = 'src/*/index.js',
    htmls = glob.sync(require('./mypath.js').devHtmls),    
    htmlCfgs = [], // HtmlWebpackPlugin配置项
    publicPath = require('./mypath.js').publicPath || 'http://localhost:9191/';


//动态获取入口文件，使得html、js的路径一致

htmls.forEach(filepath => {
    let paths = filepath.split('/'), // 以 html/user_center/index.html 截断成数组为例
        file = paths.pop(), // 如 index.html
        path = paths.join('/') + '/', // 如html/user_center/
        names = /^([\s\S]+).js$/i.exec(file),
        devPath = path; // 如html/user_center/
        console.log(paths,names,file,path)
    if (names) {
        newEntries[paths[1]] = [
            // __dirname + '/../src/'+paths[1] +'/index.js',
            Path.join(__dirname, '/..'+'/src/',paths[1],'/index.js'),
            hotMiddlewareScript
        ]
        //生成html文件
        htmlCfgs.push(
            new HtmlWebpackPlugin({
                filename: paths[1], //http访问路径
                // template: __dirname + '/../src/'+[paths[1]]+'/index.html', //实际文件路径
                template: Path.join(__dirname, '/..'+'/src/', paths[1], '/index.html'), //实际文件路径
                inject: 'body',
                //templateContent: contentText,
                chunks: ['commons', paths[1]],
                //排序
                chunksSortMode: 'manual'
            })
        );
    }
});

//独立打包css
htmlCfgs.push(
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    // //压缩css
    // new OptimizeCssAssetsPlugin({
    //     assetNameRegExp: /\.css$/g,
    //     cssProcessor: require('cssnano'),
    //     cssProcessorOptions: {
    //         discardComments: { removeAll: true },
    //         safe: true
    //     },
    //     canPrint: true
    // }),
    new webpack.HotModuleReplacementPlugin()
);


module.exports = {
    mode: 'development',
    entry: newEntries,
    output: {
        path: Path.resolve(__dirname, buildRoot),
        filename: 'js/[name].js?v=' + new Date().getTime(),
        publicPath,
        libraryTarget: 'umd',
        library: 'MyDoc',
        umdNamedDefine: true 
    },

    // devtool: 'eval',

    performance: {
        hints: false
    },

    module: {
        //在配置文件里添加JSON loader
        rules: [
            {
                 test: /\.json$/,
                 loader: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=images/&publicPath=/images/']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader?name=font/[name].[ext]'
                    }
                ]
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                 use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [
                     // 'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    // 'css-loader',
                    // 'sass-loader',
                    // 'vue-style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources
                            resources: [
                                './src/common/css/mixins/mixins.scss'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',

                        options: {
                            loaders: {
                                scss: 'style-loader!css-loader!sass-loader'
                            }
                        }
                    }
                ]
            },
            // {
            //     test: Path.resolve(__dirname, 'src/common/js/zepto.js'),
            //     loader: 'exports-loader?window.Zepto!script-loader'
            // }
        ]
    },

    //webpack 4.x 新增写法
    optimization: {
        splitChunks: {
            cacheGroups: {
               
                //打包公共模块
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'commons'
                },
            }
        }
    },

    resolve: {
        alias: {
            components:Path.resolve(__dirname, '../src/components'),
            // vue: Path.resolve(__dirname, 'src/common/js/vue.js'),
            //zepto: Path.resolve(__dirname, 'src/common/js/zepto.js'),
            // _vue: Path.resolve(__dirname, '../src/components'),
            // _com: Path.resolve(__dirname, '../src/common'),
            // ycf: Path.resolve(__dirname, '../src/ycf/'),
            // commons: Path.resolve(__dirname, '../src/common/module/module.js')
        }
        //extensions: ['.js', '.vue', '.json'],
    },

    plugins: htmlCfgs,

    externals: {
        vue: 'Vue',
        zepto: '$',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'antd': 'antd'

    }

    // devServer: {
    //     contentBase: "./src", //本地服务器所加载的页面所在的目录
    //     //historyApiFallback: true, //不跳转
    //     inline: true, //实时刷新
    //     hot: true,
    //     host: 'localhost', //改成本机ip地址或'localhost'，用Ip地址的目的是让局域网的网段都可以访问该服务
    //     port: 9191
    // },
};
