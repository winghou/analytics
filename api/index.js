var express = require("express");
var router = express.Router();
var mydb = require("../db/mydb");

var addErrorData = require("./addErrorData");
var addInfo = require("./addInfo");
var getErrorDistributed = require("./getErrorDistributed");
var getErrorLine = require("./getErrorLine");
var sevenErrorLine = require("./sevenErrorLine");
var searchPages = require("./searchPages");
var pageErrorList = require("./pageErrorList");
var getError = require("./getError");
var getPvLine = require("./getPvLine");
var getSevenPvLine = require("./sevenPvLine");
var Performance = require("./getPerformance");
var getPerformanceLine = require("./getPerformanceLine");
var getSevenPerformanceLine = require("./sevenPerformanceLine");

var getDayInfo = require("./getDayInfo");

var getDB = function (project) {
    return "ycf_"+project;
}


//添加pv数据
router.post("/addInfo", function (req, res) {
    addInfo(req,res,mydb)
})


//添加报错数据
router.get("/addErrorData", function (req, res) {
    addErrorData(req,res,mydb)
})



//获取一天错误页面分布
router.get("/getErrorDistributed", function (req, res) {
    getErrorDistributed(req,res,mydb)
})

//获取一天错误数据走势
router.get("/getErrorLine", function (req, res) {
    getErrorLine(req,res,mydb)
})

//获取七天错误数据走势
router.get("/sevenErrorLine", function (req, res) {
    sevenErrorLine(req,res,mydb)
})

//页面list
router.get("/searchPages", function (req, res) {
    searchPages(req,res,mydb)
})


//错误搜索
router.get("/pageErrorList", function (req, res) {
    pageErrorList(req,res,mydb)
})


//错误详情
router.get("/getError", function (req, res) {
    getError(req,res,mydb)
})

//pv走势记录
router.get("/getPvLine", function (req, res) {
    getPvLine(req,res,mydb)
})

//7天pv走势记录
router.get("/getSevenPvLine", function (req, res) {
    getSevenPvLine(req,res,mydb)
})

//Performance记录
router.get("/getPerformance", function (req, res) {
    Performance(req,res,mydb)
})

//getPerformanceLine
router.get("/getPerformanceLine", function (req, res) {
    getPerformanceLine(req,res,mydb,'domready')
})
router.get("/getResponseStartLine", function (req, res) {
    getPerformanceLine(req,res,mydb,'responseStart')
})
router.get("/getSevenPerformanceLine", function (req, res) {
    getSevenPerformanceLine(req,res,mydb,'domready')
})
router.get("/getSevenResponseLine", function (req, res) {
    getSevenPerformanceLine(req,res,mydb,'responseStart')
})

//getDayInfo
router.get("/getDayInfo", function (req, res) {
    getDayInfo(req,res,mydb)
})



module.exports = router;






