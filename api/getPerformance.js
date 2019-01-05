const util = require('./util');
const { getPerformanceStages } = require('./util/Stages');
/**
 * Performance详情
 * @module getPerformance
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getPerformance = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        minitor = save_minitor.model("performanceList" + days[0] + '_' + days[1], mydb.errorSchema),
         url = reqQuery.url || /.*/,
        stages = getPerformanceStages(Timestamps[0], Timestamps[1], url);
    Promise.all([
        minitor.aggregate(getPerformanceStages(Timestamps[0], Timestamps[1], url,'css')),
        minitor.aggregate(getPerformanceStages(Timestamps[0], Timestamps[1], url,'js')),
        minitor.aggregate(getPerformanceStages(Timestamps[0], Timestamps[1], url,'xhr'))
    ]).then(function(data) {
        res.send({
            code: 1,
            msg: "成功",
            reslut: {css:data[0],js:data[1],xhr:data[2]},
        });
    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getPerformance;