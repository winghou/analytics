const bodyParser = require('body-parser');
const express = require('express');
const os = require("os");


// require("@babel/core").transform("code", {
//   presets: ["@babel/preset-react"],
// });



const path = require('path');
const ejs = require('ejs'); //我是新引入的ejs插件
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, '../web-public/')));
app.use(bodyParser.json());
// app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

const readData = require('./readData');
//文档信息
global.docData = {};
readData( __dirname + "/../data/index.json",function(data){
  // console.log(myTrim(decodeURI(data)));
  global.docData = JSON.parse(data);
})



//demo 在添加新文档时使用
readData(__dirname + "/../api/demodata/nav.json",function(data){
  global.navDemo = JSON.parse(data);
});
readData(__dirname + "/../api/demodata/DEMO.MD",function(data){
  global.MdDemo = data;
});
readData(__dirname + "/../api/demodata/DEMO.json",function(data){
  global.ComponentDemo = JSON.parse(data);
});


//ComponentData 记录组件数据
global.ComponentData = {};






//预览 开启socket
global.viewData = {};
global.jsondata = {};
readData( __dirname + "/../data/index.json",function(data){
	// console.log(myTrim(decodeURI(data)));
	global.jsondata = JSON.parse(data);
})


function getComponent(name,page,demo,socket){
  for (var i in global.ComponentData[name + '_' + page].Component) {
          if (global.ComponentData[name + '_' + page].Component[i].name == demo) {
              global.viewData[socket.id] = Object.assign({},global.ComponentData[name + '_' + page].Component[i]);
              break;
          }
      }
  if(!global.viewData[socket.id]){
  global.viewData[socket.id] = {
        "id":"",
        "css":"",
        "js":"",
        "html":"",
        "des":"",
        "name":"",
        "ism":1,
        "height":"100"
    }
  }
  socket.emit('getData', {});
}

io.on('connection', function(socket) {


    //global.viewData[socket.id] = Object.assign({}, global.jsondata);
    
    socket.emit('create', {});
    socket.on('setData', function(data) {
       let sid = data.sid;
       let name = data.DocName;
       let page = data.DocPage;
       let demo = data.DemoName;

      if (global.ComponentData[name + '_' + page]) {
            getComponent(name,page,demo,socket)
      } else {
            readData(__dirname + "/../data/" + name + "/" + page + ".json", function(data) {
                global.ComponentData[name + '_' + page] = JSON.parse(data);
                getComponent(name,page,demo,socket)
            })
        }


    });
    socket.on('disconnect', function() {
    	delete global.viewData[socket.id];
    	// console.log(global.viewData );
    });

    socket.on('change', function(data) {
       let sid = data.sid;
       if(data.css){
       		global.viewData[sid].css = data.css;
       }
       if(data.html){
       		global.viewData[sid].html = data.html;
       }
       if(data.js){
          global.viewData[sid].js = data.js;
       }
       socket.emit('changeFinish', {});
    });

});


// const testRouter = require('../router/test')
// app.use('/template', testRouter);


//路由
const DocRouter = require('../router/index');
app.use('/', DocRouter);

//api
const APIRouter = require('../api/api');
app.use('/api', APIRouter);




server.listen(9191);
// app.listen(9191, function () {
//   console.log('app listening on port 9191!\n');
//   //console.info("IP:"+ networkInterfaces.en0[1].address)
// });