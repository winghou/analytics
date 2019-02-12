const express = require('express');
const DocRouter = express.Router();
const Path = require('path');
const fs = require("fs");
const babel = require("babel-core");




DocRouter.get('/', function(req, res, next) {
    res.render('index', { });
});
DocRouter.get('/setting', function(req, res, next) {
    res.render('setting', { });
});

module.exports = DocRouter;

