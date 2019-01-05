const util = require('./util');
const { performanceLineStages } = require('./util/Stages');
/**
 * 错误详情
 * @module getPerformanceLine
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getPerformanceLine = function(req, res, mydb,type) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
         url = reqQuery.url || /.*/,
        minitor = save_minitor.model("performanceList" + days[0] + '_' + days[1], mydb.errorSchema),
        _id = reqQuery.id,
        stages = performanceLineStages(Timestamps[0], Timestamps[1],url,type);
    Promise.all([
        minitor.aggregate(stages)
    ]).then(function(data) {
        res.send({
            code: 1,
            msg: "成功",
            reslut: data[0],
        });
    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getPerformanceLine;