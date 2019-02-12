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

/**
 * 添加pv信息和资源信息
 * @module addInfo
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let addInfo = function(req, res, mydb) {
    let clientIp = getIp(req),
        reqBody = req.body,
        reqQuery = req.query,
        getCurDate = util.date.getCurDate().split('-'),
        save_minitor = mydb[reqBody.project],
        minitor = save_minitor.model("pvList" + getCurDate[0] + '_' + getCurDate[1], mydb.pvSchema),
        performanceMinitor = save_minitor.model("performanceList" + getCurDate[0] + '_' + getCurDate[1], mydb.performanceSchema),
        nv;

    //规则判断


    try {
        nv = JSON.parse(reqBody.nv);
    } catch (e) {
        nv = { UA: reqBody.ua };
    }
    let TestEntity = new minitor({
        project: reqBody.project,
        url: reqBody.url,
        pathname: reqBody.pathname,
        host: reqBody.host,
        ua: reqBody.ua,
        nv: nv,
        timestamp: +new Date(),
        ip: clientIp,
        title: reqBody.title
    });
    
    //添加performance
    let performanceTestEntity = new performanceMinitor({
        project: reqBody.project,
        url: reqBody.url,
        pathname: reqBody.pathname,
        host: reqBody.host,
        timestamp: +new Date(),
        ip: clientIp,
        performance:  JSON.parse(reqBody.performance)
    });


    Promise.all([
       TestEntity.save(),
       performanceTestEntity.save()
    ]).then(function(data) {
        res.send({
            code: 1,
            msg: "成功"
        });
    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });
}


module.exports = addInfo;