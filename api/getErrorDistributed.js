const util = require('./util');

/**
 * 错误页面分布
 * @module getErrorDistributed
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getErrorDistributed = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        minitor = save_minitor.model("errorList" + days[0] + '_' + days[1], mydb.errorSchema),
        stages = [];

    stages.push({
        $match: {
            timestamp: {
                $gte: Timestamps[0],
                $lt: Timestamps[1]
            }
        }
    })
    stages.push({
        $group: {
            _id: '$pathname',
            num: {$sum : 1},
            list:{$push: "$title"}
        }
    })
    
     minitor.aggregate(stages).exec(function(err,reslut){
        if(err){
            res.send({
                code: 0,
                msg: err
            });
        }else{
            res.send({
                code: 1,
                msg: "成功",
                reslut:reslut
            });
        }
     })
    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getErrorDistributed;