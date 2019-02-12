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
 * 设置
 * @module setting
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let setting = function(req, res, mydb) {
    let clientIp = getIp(req),
        reqBody = req.body,
        reqQuery = req.query,
        getCurDate = util.date.getCurDate().split('-'),
        save_minitor = mydb['setting'],
        minitor = save_minitor.model("setting", mydb.settingSchema);

    //规则判断

    let TestEntity = new minitor({
        project: reqBody.project,
        robot: reqBody.robot,
        errornumber: reqBody.errornumber,
        limit: reqBody.limit,
        urlRule: reqBody.urlRule,
        errorRule: reqBody.errorRule
    });

    //判断项目规则是否存在，
    minitor.find({ project: reqBody.project }, function(err, doc) {
        if (err) {
            res.json({
                code: 0,
                msg: error
            })
        } else {
            if (doc.length == 0) {
                Promise.all([
                    TestEntity.save()
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
            } else {
                minitor.update({ project: reqBody.project },{
                    project: reqBody.project,
                    robot: reqBody.robot,
                    errornumber: reqBody.errornumber,
                    limit: reqBody.limit,
                    urlRule: reqBody.urlRule,
                    errorRule: reqBody.errorRule
                }, function(err) {
                    if (err) {
                        res.json({
                            code: 0,
                            msg: error
                        })
                    } else {
                        res.send({
                            code: 1,
                            msg: "成功"
                        });
                    }
                })
            }
        }
    })


    // Promise.all([
    //     TestEntity.save()
    // ]).then(function(data) {
    //     res.send({
    //         code: 1,
    //         msg: "成功"
    //     });
    // }).catch(function(error) {
    //     res.json({
    //         code: 0,
    //         msg: error
    //     })
    // });
}


module.exports = setting;