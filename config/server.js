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
const config = require('./webpack.run.js');
const compiler = webpack(config);

const bodyParser = require('body-parser')

app.use(bodyParser.json());
// Tell express to use the webpack-dev-middleware and use the webpack.config.js

// configuration file as a base.
app.use(express.static(path.join(__dirname, '../web-public/')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, '../build'));
app.set('view engine', 'ejs');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

app.use('/',require('../router/index'))

app.use('/test', router);

// 允许跨域访问／／／
app.all('/api/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'x-Request-with')
  res.header('Access-Control-Allow-Methods', "GET, POST")
  res.header('X-Powered-By', '4.15.2')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()   //执行下一个中间件。
})

// app.use(proxy('www.google.com'), '/mapi');
// app.listen('www.google.com', function(){
// 	console.log("ddddddd")
// });

app.listen(9191, function () {
  console.log('app listening on port 9191!\n');
  //console.info("IP:"+ networkInterfaces.en0[1].address)
});
