const util = require('./util');
const {lineStages} = require('./util/Stages');
/**
 * 一天错误数据走势
 * @module getErrorLine
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getErrorLine = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        days = reqQuery.day.split('-'),
        url = reqQuery.url || /.*/,
        minitor = save_minitor.model("errorList" + days[0] + '_' + days[1], mydb.errorSchema),
        stages = lineStages( Timestamps[0],Timestamps[1],url);

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


module.exports = getErrorLine;