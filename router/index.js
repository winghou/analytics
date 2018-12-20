const express = require('express');
const DocRouter = express.Router();
const readData = require('../config/readData');
const Path = require('path');
const fs = require("fs");
const babel = require("babel-core");
const babelOptions = {   "presets": [ "react","env", "stage-0"]}


const rimraf = require('rimraf');

function getFirstAttr(obj) {
    for (var k in obj) return k;
}

//渲染doc
function docRender(name, page, data, navData, res,defaultOpenKeys) {
    readData(__dirname + "/../data/" + name + "/" + page + ".MD", function(data) {
        let md = data;
        if (global.ComponentData[name + '_' + page]) {
            res.render('doc', {defaultOpenKeys:defaultOpenKeys, data: global.docData, name: name, page: page, markdown: data, navData: navData, ComponentData: global.ComponentData[name + '_' + page] });
        } else {
            readData(__dirname + "/../data/" + name + "/" + page + ".json", function(data) {
                global.ComponentData[name + '_' + page] = JSON.parse(data);
                res.render('doc', {defaultOpenKeys:defaultOpenKeys, data: global.docData, name: name, page: page, markdown: md, navData: navData, ComponentData: global.ComponentData[name + '_' + page] });
            })
        }
    })
}


DocRouter.get('/', function(req, res, next) {
    res.render('index', { data: global.docData });
});


DocRouter.get('/new', function(req, res, next) {
    res.render('new', { data: {} });
});


DocRouter.get('/doc/:name', function(req, res, next) {
    let name = req.params.name;
    readData(__dirname + "/../data/" + name + "/nav.json", function(data) {
        let _data = JSON.parse(data)
        let page = getFirstAttr(_data.nav);
        let navData = data;
        docRender(name, page, data, navData, res,page);
    })
});
DocRouter.get('/doc/:name/:page', function(req, res, next) {
    let name = req.params.name,
        page = req.params.page;
    //读取nav数据 
    readData(__dirname + "/../data/" + name + "/nav.json", function(data) {
        let navData = data;
        docRender(name, page, data, navData, res,page);
    })
});

DocRouter.get('/doc/:name/:page/:child', function(req, res, next) {
    let name = req.params.name,
        page = req.params.page,
        child = req.params.child;
    //读取nav数据 
    readData(__dirname + "/../data/" + name + "/nav.json", function(data) {
        let navData = data;
        docRender(name, child, data, navData, res,page);
    })
});


//demo iframe
DocRouter.get('/demo/:name/:page/:demo', function(req, res, next) {
    let name = req.params.name,
        page = req.params.page,
        demo = req.params.demo;
    let demo_data = {};
    for (var i in global.ComponentData[name + '_' + page].Component) {
        if (global.ComponentData[name + '_' + page].Component[i].name == demo) {
            demo_data = global.ComponentData[name + '_' + page].Component[i];
            break;
        }
    }
    let result = babel.transform(demo_data.js, babelOptions);
    let es5Js = result?result.code:'';
    //读取nav数据 
    res.render('demo_show', { data: demo_data, docData: global.docData.item[name] ,es5Js:es5Js});
});

DocRouter.get('/demopreview/:name/:page/:demo/:sid', function(req, res, next) {
    let name = req.params.name,
        page = req.params.page,
        demo = req.params.demo,
        sid = req.params.sid;
    let demo_data = {};

    let result = babel.transform(global.viewData[sid].js, babelOptions);
    let es5Js = result?result.code:'';
    res.render('demo_show', {data: global.viewData[sid], docData: global.docData.item[name],es5Js:es5Js});

   
    
});


//markdown
DocRouter.get('/markdown/:name/:page', function(req, res, next) {
    let name = req.params.name,
        page = req.params.page
    let demo_data = {};
    if (!global.ComponentData[name + '_' + page]) {
        readData(__dirname + "/../data/" + name + "/" + page + ".json", function(data) {
            global.ComponentData[name + '_' + page] = JSON.parse(data);
            readData(__dirname + "/../data/" + name + "/" + page + ".MD", function(data) {
                res.render('markdown', { markdown: data, name: name, page: page, ComponentData: global.ComponentData[name + '_' + page] });
            })
        })
    }else{
      readData(__dirname + "/../data/" + name + "/" + page + ".MD", function(data) {
                res.render('markdown', { markdown: data, name: name, page: page, ComponentData: global.ComponentData[name + '_' + page] });
            })
    }
    //读取nav数据 

});


DocRouter.get('/setting/:name', function(req, res, next) {
    let name = req.params.name;
    readData(__dirname + "/../data/" + name + "/nav.json", function(data) {
        let navData = data;
        
        res.render('setting', {docData: global.docData.item[name],navData:navData});
    })
});



// /**
//  * 写文件/文件夹的工厂函数 文件若之前已存在 则不做修改
//  * @param {*} path 路径
//  * @param {*} isDir 是否文件夹
//  * @param {*} data 写入数据
//  * @param {*} sMsg 成功信息
//  * @param {*} fMsg 错误信息
//  */
// function promiseFactory(path, isDir, data, sMsg, fMsg) {
//   return new Promise((resolve, reject) => {
//     if (isDir) {
//       fs.mkdir(path, err => {
//         err && err.code !== 'EEXIST' ? reject({
//           err,
//           message: fMsg
//         }) : resolve({
//           message: sMsg
//         })
//       })
//     } else {
//       fs.writeFile(path, data, {
//         flag: 'wx'
//       }, err => {
//         err && err.code !== "EEXIST" ? reject({
//           err,
//           message: fMsg
//         }) : resolve({
//           message: sMsg
//         })
//       })
//     }
//   })
// }

// /**
//  * 生成删除文件/文件夹promise的工厂函数
//  * @param {*} path 文件/文件夹路径
//  * @param {*} isDir 是否文件夹
//  * @param {*} sMsg 成功提醒
//  * @param {*} eMsg 错误提醒
//  */
// function removeFilePromise(path, isDir, sMsg, eMsg) {
//   return new Promise((resolve, reject) => {
//     if (isDir) {
//       rimraf(path, {}, err => {
//         err && err.code !== 'ENOENT' ? reject({
//           err,
//           message: eMsg
//         }) : resolve({
//           message: sMsg
//         })
//       })
//     } else {
//       fs.unlink(path, err => {
//         err && err.code !== 'ENOENT' ? reject({
//           err,
//           message: eMsg
//         }) : resolve({
//           message: sMsg
//         });
//       })
//     }
//   })
// }

// // 先判断 nav.json 存在时才更新nav.json
// // 需要创建的类型有三种 一层md及json，目录，二层md及json
// // 还要删除不存在的文件
// DocRouter.post('/setting/:name/', function (req, res) {
//   let {
//     name
//   } = req.params,
//     navJson = req.body, // nav.json
//     navData = navJson.nav, // 目录结构
//     pages = Object.keys(navData), // 所有pages的名称
//     dirNames = pages.filter(page => !!navData[page].children), // 应该创建的目录
//     mdNames = pages.filter(page => !navData[page].children), // 应该创建的md
//     navPath = Path.join(__dirname, '../data/', name, '/nav.json'), // nav.json路径
//     mdPromises = [], dirPromises;
//   let curAllFiles = fs.readdirSync(Path.join(__dirname, '../data/', name)),
//     curFiles = [], // 当前的目录中的json/md
//     curDirs = []; // 当前目录下的目录
//   curAllFiles.forEach((item) => {
//     item.match(/\.json$|\.md$/i) ? item !== 'nav.json' && curFiles.push(item) : curDirs.push(item);
//   })
//   for (let dir of dirNames) {
//     let {
//       name,
//       children
//     } = navData[dir];
//     children.forEach(groupItem => {
//       groupItem.children.forEach(subItem => {
//         mdNames.push(`${name}/${subItem.name}`)
//       })
//     })
//   }
//   let temp = mdNames.map(item => item + '.json').concat(mdNames.map(item => item + '.MD'))
//   let shouldDelDirs = curDirs.filter(item => !dirNames.includes(item)); // 应该删除的目录
//   let shouldDelFiles = curFiles.filter(item => !temp.includes(item)); // 应该删除的md/json
//   // console.log(curDirs);
//   // console.log(curFiles);
//   // console.log(dirNames);
//   // console.log(mdNames);
//   // console.log('  ')
//   // console.log(shouldDelDirs);
//   // console.log(shouldDelFiles);
//   let fileExistPromise = new Promise((resolve, reject) => {
//     fs.open(navPath, 'r+', (err, fd) => {
//       // 文件不存在
//       if (err) {
//         reject({
//           err,
//           name,
//           message: err.code === 'ENOENT' ? '文件不存在' : err.message || ''
//         })
//         return fs.close(fd, () => {});
//       }
//       fs.writeFile(navPath, JSON.stringify(navJson), err => {
//         // 更新nav.json失败
//         if (err) {
//           reject({
//             err,
//             name,
//             message: '更新nav.json失败'
//           })
//         } else {
//           resolve()
//         }
//         return fs.close(fd, () => {})
//       })
//     })
//   })
//   dirPromises = dirNames.map((dir) => promiseFactory(Path.join(__dirname, '../data/', name, dir), true, '', `创建目录${dir}成功`, `创建目录${dir}失败`));
//   dirPromises.push(fileExistPromise)
//   Promise.all(dirPromises)
//     .then(() => {
//       mdNames.forEach(md => {
//         mdPromises.push(promiseFactory(Path.join(__dirname, '../data/', name, md + '.md'), false, demoMD, `创建${md}.md成功`, `创建目录${md}失败`))
//         mdPromises.push(promiseFactory(Path.join(__dirname, '../data/', name, md + '.json'), false, JSON.stringify(demoJSON), `创建${md}.json成功`, `创建目录${md}.json失败`))
//       })
//       shouldDelDirs.forEach(delDir => {
//         mdPromises.push(removeFilePromise(Path.join(__dirname, '../data/', name, delDir), true, `成功删除${delDir}`, `删除${delDir}失败`))
//       })
//       shouldDelFiles.forEach(delFile => {
//         mdPromises.push(removeFilePromise(Path.join(__dirname, '../data/', name, delFile), false, `成功删除${delFile}`, `删除${delFile}失败`))
//       })
//       return Promise.all(mdPromises)
//     })
//     .then(() => {
//       res.json({
//         success: true,
//         code: 1,
//         message: '目录更新成功'
//       })
//     })
//     .catch(err => {
//       res.json({
//         ...err,
//         emmm: '',
//         success: false,
//         code: 0
//       })
//     })
// })




module.exports = DocRouter;

