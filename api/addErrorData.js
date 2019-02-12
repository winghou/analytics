const util = require('./util');

const https = require("https");
const querystring = require('querystring');

//获取ip
let getIp = function(req) {
    var ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';

    ip = ip.match(/\d+.\d+.\d+.\d+/);
    return ip[0];
};

// fetch('http://192.168.7.223:9191/api/addErrorData?title=云客赞前端监控&url=http://u.yaochufa.com/ycfad2014/public/login&pathname=/ycfad2014/public/login&host=u.yaochufa.com&project=activity&ua=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', {
//             method: 'GET',
//             mode: 'no-cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
// })


/**
 * 添加报错信息
 * @module addErrorData
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let addErrorData = function(req, res, mydb) {
    let clientIp = getIp(req),
        reqBody = req.body,
        reqQuery = req.query;
    getCurDate = util.date.getCurDate().split('-');
    let save_minitor = mydb[reqQuery.project];
    let minitor = save_minitor.model("errorList" + getCurDate[0] + '_' + getCurDate[1], mydb.errorSchema),
        nv,
        setting_db = mydb['setting'],
        settingMinitor = setting_db.model("setting", mydb.settingSchema),
        timestamp = +new Date();
    let errorNumber = 0; //用于记录一分钟内的报错数，每分钟清零1次
    // setInterval(function() {
    //     errorNumber = 0;
    // }, 60000);
    let myrobot = function() {
        var _project = reqQuery.project || '';
        switch (_project) {
            case 'u':
                _project = '分销系统';
                break;
            case 'rpt':
                _project = '业绩看板';
                break;
            case 'yunke':
                _project = '云客赞';
                break;
            case 'm':
                _project = 'm版';
                break;
            case 'zhuanti':
                _project = '专题';
                break;
            case 'activity':
                _project = '活动';
                break;
            case 'www':
                _project = '官网';
                break;
        }
        //https://oapi.dingtalk.com/robot/send?access_token=7b8224a94f4d78cb601f39316128115ea60930be5cb6536ea6354ce690800f55
        let queryParams = {
            "msgtype": "link",
            "link": {
                "text": _project + '前端功能出现异常,最近一分钟内上报错误数量超过' + 500 + ',请及时查明原因',
                "title": _project + '预警',
                "picUrl": "http://cdn.jinxidao.com/detail/appCode.png?v=3",
                "messageUrl": "http://192.168.7.223:9191/?project=u"
            }
        };
        const requestData = JSON.stringify(queryParams);
        var options = {
            hostname: "oapi.dingtalk.com",
            port: 443,
            path: '/robot/send?access_token=7b8224a94f4d78cb601f39316128115ea60930be5cb6536ea6354ce690800f55',
            method: "POST",
            json: true,
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            }
        };
        var req = https.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                console.log(chunk)
            })
        });
        req.on('error', function(err) {
            console.error(err);
        });

        req.write(requestData);

        req.end();
    };
    let addData = function(errornumber, robot) {
        errorNumber++;
        if (errorNumber >= errornumber && robot) {
            //触发机器人
            myrobot();
        }
        try {
            nv = JSON.parse(reqQuery.nv);
        } catch (e) {
            nv = { UA: reqQuery.ua };
        }
        let TestEntity = new minitor({
            project: reqQuery.project,
            url: reqQuery.url,
            pathname: reqQuery.pathname,
            host: reqQuery.host,
            content: reqQuery.content,
            errorurl: reqQuery.errorurl,
            errorline: reqQuery.errorline,
            errorContent: reqQuery.errorContent,
            ua: reqQuery.ua,
            nv: nv,
            referrer: reqQuery.referrer,
            timestamp: timestamp,
            ip: clientIp,
            title: reqQuery.title,
            userId: reqQuery.userId,
            userInfo: reqQuery.userInfo
        });
        TestEntity.save(function(error, doc) {
            if (error) {
                console.log('error', error)
                res.send({
                    code: 0,
                    msg: error
                });
            } else {

                res.send({
                    code: 1,
                    msg: "成功"
                });
            }
        });
    }

    let checkRule = function(urlRule, errorRule, errornumber, robot) {
        let url = reqQuery.url,
            errorContent = reqQuery.errorContent,
            reg_url = new RegExp(urlRule),
            reg_errorContent = new RegExp(errorRule),
            match_url = null,
            match_errorContent = null;
        if (urlRule.length > 0) {
            match_url = url.match(reg_url);
        }
        if (errorRule.length > 0) {
            match_errorContent = errorContent.match(reg_errorContent);
        }
        if (match_url == null && match_errorContent == null) {
            addData(errornumber, robot);
        } else {
            res.send({
                code: 2,
                msg: null
            });
        }
    }


    Promise.all([
        settingMinitor.find({ project: reqQuery.project }),
        minitor.findOne({ ip: clientIp, url: reqQuery.url }).sort('-timestamp')
    ]).then(function(data) {
        let ruledata = {};
        if (data[0].length == 0) {
            ruledata = {
                errorRule: "",
                errornumber: 50,
                limit: 10,
                robot: true,
                urlRule: ""
            }
        } else {
            ruledata = data[0][0];
        }
        if (data[1] == null) {
            //没有该ip的数据，判断规则
            checkRule(ruledata.urlRule, ruledata.errorRule);
        } else {
            //判断
            let oldtime = data[1].timestamp;
            if (timestamp - oldtime < ruledata.limit * 60000) {
                //在区间内，不上报错误                
                res.send({
                    code: 0,
                    msg: null
                });
            } else {
                //判断规则
                checkRule(ruledata.urlRule, ruledata.errorRule, ruledata.errornumber, ruledata.robot);
            }
        }

    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });
    //规则判断
    // 


    //source map

    //报警
}


module.exports = addErrorData;