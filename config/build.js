const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const os=require("os");
const networkInterfaces=os.networkInterfaces();
const path = require('path');
const router = express.Router();
const ejs = require('ejs');  //我是新引入的ejs插件
const app = express();
const config = require('./webpack.build.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(express.static(path.join(__dirname, '../web-public/')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'html');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use('/test', router);

// app.use(proxy('www.google.com'), '/mapi');
// app.listen('www.google.com', function(){
// 	console.log("ddddddd")
// });

app.listen(9191, function () {
  console.log('app listening on port 9191!\n');
  //console.info("IP:"+ networkInterfaces.en0[1].address)
});