const util = require('./util');
const { errorStages, errorNumStages } = require('./util/Stages');
/**
 * 页面错误列表 
 * @module pageErrorList
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let pageErrorList = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        minitor = save_minitor.model("errorList" + days[0] + '_' + days[1], mydb.errorSchema),
        page = reqQuery.page || 1,
        url = reqQuery.url || /.*/,
        uid = reqQuery.uid || /.*/,
        errorContent = reqQuery.errorContent || /.*/,
        stages = errorStages(Timestamps[0], Timestamps[1], url, page ,errorContent,uid),
        TOTALStages = errorNumStages(Timestamps[0], Timestamps[1], url,errorContent,uid);
    Promise.all([
        minitor.aggregate(stages),
        minitor.aggregate(TOTALStages)
    ]).then(function(data) {

        res.send({
            code: 1,
            msg: "成功",
            reslut: data[0],
            total: (data[1][0])?data[1][0].num:0,

        });
    }).catch(function(error) {
        console.log(error)
        res.json({
            code: 0,
            msg: error
        })
    });

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = pageErrorList;