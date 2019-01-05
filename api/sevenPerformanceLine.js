const util = require('./util');
const {sevenPerformanceStages} = require('./util/Stages');

/** 
 * 七天pv数据走势
 * @module getSevenPerformanceLine
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getSevenPerformanceLine = function(req, res, mydb,type) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        AfterDate = util.date.getAfterDate(reqQuery.day,-7),
        AfterDateTimestamps = util.date.getTimestamp(AfterDate),
        days = reqQuery.day.split('-'),
        url = reqQuery.url || /.*/,
        minitor = save_minitor.model("performanceList" + days[0] + '_' + days[1], mydb.errorSchema),
        stages = sevenPerformanceStages( AfterDateTimestamps[0],Timestamps[1],url,type);
     let day = new Date(reqQuery.day).getDate(),
         LastMonth = util.date.getLastMonth(days[0],days[1]),
         data,error=false,
         getSevenDay = util.date.getSevenDay(reqQuery.day);
     Promise.all([
            minitor.aggregate(stages),
            (day<7)?save_minitor.model("performanceList" + LastMonth[0] + '_' + LastMonth[1], mydb.errorSchema).aggregate(stages):[]
        ])
        .then(function (data) {
            let arry = data[1].concat(data[0]);
            let _data = [];
            getSevenDay.map(function(item,i){
                _data[i] = {
                    date:item,
                    num:0
                }
                for(let n in arry){
                    if(item==util.date.getYMD(arry[n].date.split('-'))){
                        _data[i].num = arry[n].num;
                        break;   
                    }
                }
            });
            res.send({
                code: 1,
                msg: "成功",
                reslut:_data
            });
        }).catch(function (error) {
                res.json({
                    code: 0,
                    msg: error
                })
            })
     
    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getSevenPerformanceLine;