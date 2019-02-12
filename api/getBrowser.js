const util = require('./util');
const { browserStages } = require('./util/dayInfoStages');
/**
 * 错误详情
 * @module getBrowser
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
let getBrowser = function(req, res, mydb) {
    let reqQuery = req.query,
        save_minitor = mydb[reqQuery.project],
        Timestamps = util.date.getTimestamp(reqQuery.day),
        AfterDate = util.date.getAfterDate(reqQuery.day,-7),
        AfterDateTimestamps = util.date.getTimestamp(AfterDate),
        days = reqQuery.day.split('-'),
        url = reqQuery.url || /.*/,
        minitor = save_minitor.model("pvlist" + days[0] + '_' + days[1], mydb.errorSchema),
        stages = browserStages( AfterDateTimestamps[0],Timestamps[1],url);
     let day = new Date(reqQuery.day).getDate(),
         LastMonth = util.date.getLastMonth(days[0],days[1]),
         data,error=false,
         getSevenDay = util.date.getSevenDay(reqQuery.day);
     Promise.all([
            minitor.aggregate(stages),
            (day<7)?save_minitor.model("pvlist" + LastMonth[0] + '_' + LastMonth[1], mydb.errorSchema).aggregate(stages):[]
        ])
        .then(function (data) {
            // let arry = data[1].concat(data[0]);
            // let _data = [];
            // getSevenDay.map(function(item,i){
            //     _data[i] = {
            //         date:item,
            //         num:0
            //     }
            //     for(let n in arry){
            //         if(item==util.date.getYMD(arry[n].date.split('-'))){
            //             _data[i].num = arry[n].num;
            //             break;   
            //         }
            //     }
            // });
            res.send({
                code: 1,
                msg: "成功",
                reslut:data[0]
            });
        }).catch(function (error) {
                res.json({
                    code: 0,
                    msg: error
                })
            })
     

    // console.log( minitor.aggregate(stages),'aggregate')
}


module.exports = getBrowser;