const util = require('./util');
const { srarchStages, srarchALLStages } = require('./util/Stages');
/**
 * 错误搜索
 * @module searchPages
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let searchPages = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        minitor = save_minitor.model("pvList" + days[0] + '_' + days[1], mydb.pvSchema),
        page = reqQuery.page || 1,
        url = reqQuery.url || /.*/,
        stages = srarchStages(Timestamps[0], Timestamps[1], url, page),
        TOTALStages = srarchALLStages(Timestamps[0], Timestamps[1], url);

    Promise.all([
        minitor.aggregate(stages),
        minitor.aggregate(TOTALStages)
    ]).then(function(data) {
        res.send({
            code: 1,
            msg: "成功",
            reslut: data[0],
            total: data[1].length,

        });
    }).catch(function(error) {
        res.json({
            code: 0,
            msg: error
        })
    });

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = searchPages;