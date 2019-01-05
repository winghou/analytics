const util = require('./util');
const { performanceStages,pvStages } = require('./util/dayInfoStages');
/**
 * 一天数据
 * @module getDayInfo
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getDayInfo = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        minitor = save_minitor.model("performanceList" + days[0] + '_' + days[1], mydb.errorSchema),
        pvminitor = save_minitor.model("pvlist" + days[0] + '_' + days[1], mydb.errorSchema),
        errorminitor = save_minitor.model("errorList" + days[0] + '_' + days[1], mydb.errorSchema),
        url = reqQuery.url || /.*/,
        stages = performanceStages(Timestamps[0], Timestamps[1], url),
        pvstages = pvStages(Timestamps[0], Timestamps[1], url);
    Promise.all([
        minitor.aggregate(stages),
        pvminitor.aggregate(pvstages),
        errorminitor.aggregate(pvstages)
    ]).then(function(data) {
        let responseStart = null ,domready = null;
        if(data[0]&&data[0][0]&&data[0][0].responseStart_avgtime){
            responseStart = data[0][0].responseStart_avgtime;
        }
        if(data[0]&&data[0][0]&&data[0][0].domready_avgtime){
            domready = data[0][0].domready_avgtime;
        }
        res.send({
            code: 1,
            msg: "成功",
            reslut: {
                responseStart:responseStart,
                domready:domready,
                pv:data[1].length,
                error:data[2].length
            }
        });
    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getDayInfo;