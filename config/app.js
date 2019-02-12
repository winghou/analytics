const bodyParser = require('body-parser');
const express = require('express');
const os = require("os");

const path = require('path');
const ejs = require('ejs'); 
const app = express();

app.use(express.static(path.join(__dirname, '../web-public/')));
app.use(bodyParser.json());
// app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, '../web-public'));
app.set('view engine', 'ejs');


//路由
const indexRouter = require('../router/index');
app.use('/', indexRouter);
const pagesRouter = require('../router/pages');
app.use('/pages', pagesRouter);
const listRouter = require('../router/list');
app.use('/list', listRouter);
const contentRouter = require('../router/content');
app.use('/content', contentRouter);
const pagecontent = require('../router/pagecontent');
app.use('/pagecontent', pagecontent);

//api
const APIRouter = require('../api/index');
// 允许跨域访问／／／
app.all('/api/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'x-Request-with')
  res.header('Access-Control-Allow-Methods', "GET, POST")
  res.header('X-Powered-By', '4.15.2')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()   //执行下一个中间件。
})
app.use('/api', APIRouter);


app.listen(9191, function () {
  console.log('app listening on port 9191!\n');
  //console.info("IP:"+ networkInterfaces.en0[1].address)
});