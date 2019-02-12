const util = require('./util');


/**
 * 设置
 * @module setting
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getSetting = function(req, res, mydb) {
    let reqBody = req.body,
        reqQuery = req.query,
        getCurDate = util.date.getCurDate().split('-'),
        save_minitor = mydb['setting'],
        minitor = save_minitor.model("setting", mydb.settingSchema);

    minitor.find({ project: reqQuery.project }, function(err, doc) {
        if (err) {
            res.json({
                code: 0,
                msg: error
            })
        } else {
            if (doc.length == 0) {
                    res.send({
                        code: 1,
                        msg: "成功",
                        data:{
                            errorRule: "",
                            errornumber: 50,
                            limit: 10,
                            robot: true,
                            urlRule: ""
                        }
                    });
            } else {
               res.send({
                        code: 1,
                        msg: "成功",
                        data:doc[0]
                    });
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


module.exports = getSetting;