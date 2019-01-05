const util = require('./util');


//获取ip
let getIp = function(req) {
    var ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
        ip = ip.split(',')[0];
    }
    return ip;
};

// fetch('/api/addErrorData?title=云客赞前端监控&url=http://u.yaochufa.com/ycfad2014/public/login&pathname=/ycfad2014/public/login&host=u.yaochufa.com&project=activity&ua=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })


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
        nv;
    //规则判断


    //source map

    //报警




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
        timestamp: +new Date(),
        ip: clientIp,
        title: reqQuery.title,
        userId: reqQuery.userId,
        userInfo: reqQuery.userInfo
    });
    TestEntity.save(function(error, doc) {
        if (error) {
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


module.exports = addErrorData;