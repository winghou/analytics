var mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
//1天走势
let lineStages = function(start, end, pathname) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })

    stages.push({
        $project: {
            _id: 0,
            title: 1,
            timestamp: 1,
            project: 1,
            hour: {
                $hour: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            }
        }
    })

    stages.push({
        $group: {
            _id: '$hour',
            num: { $sum: 1 }
        }
    })

    stages.push({
        $sort: {
            _id: 1
        }
    })
    return stages
};

//7天走势
let sevenStages = function(start, end, pathname) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })

    stages.push({
        $project: {
            _id: 0,
            title: 1,
            timestamp: 1,
            project: 1,
            dayOfMonth: {
                $dayOfMonth: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            },
            month: {
                $month: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            },
            year: {
                $year: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            }
        }
    })

    stages.push({
        $group: {
            _id: { day: { $substr: ["$dayOfMonth", 0, 2] }, month: { $substr: ["$month", 0, 2] }, year: { $substr: ["$year", 0, 4] } },
            num: { $sum: 1 },
            timestamp: { $avg: "$timestamp" }
        }
    })

    stages.push({
        $sort: {
            timestamp: 1
        }
    })

    stages.push({
        $project: {
            date: { $concat: ["$_id.year", "-", "$_id.month", "-", "$_id.day"] },
            _id: 0,
            num: 1
        }
    })
    return stages
};

//页面列表
let srarchStages = function(start, end, pathname, page) {
    let stages = [],
        pIndex = 3; //
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })
    stages.push({
        $group: {
            _id: '$pathname',
            num: { $sum: 1 },
            data: { $push: { title: '$title', host: '$host' } }
        }
    })
    // stages.push({
    //     $skip: pIndex*(page-1)
    // })
    stages.push({
        $skip: pIndex * (page - 1)
    })
    stages.push({
        $limit: pIndex
    })
    return stages
};
//列表数量
let srarchALLStages = function(start, end, pathname) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })
    stages.push({
        $group: {
            _id: '$pathname'

        }
    })
    return stages
};





//错误列表
let errorStages = function(start, end, pathname, page, errorContent, userId) {
    let stages = [],
        pIndex = 3;
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname),
            errorContent: new RegExp(errorContent),
            userId: new RegExp(userId)
        }
    })
    stages.push({
        $sort: {
            timestamp: 1
        }
    })
    stages.push({
        $skip: pIndex * (page - 1)
    })
    stages.push({
        $limit: pIndex
    })
    return stages
};
//列表数量
let errorNumStages = function(start, end, pathname, errorContent, userId) {
    let stages = [];
    let param = {};
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname),
            errorContent: new RegExp(errorContent),
            userId: new RegExp(userId)
        }
    })
    stages.push({
        $group: {
            _id: '$project',
            num: { $sum: 1 },
        }
    })
    return stages
};




//错误
let getErrorStages = function(start, end, id) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            _id: new ObjectId(id)
        }
    })

    return stages
};


//pv1天走势
let pvLineStages = function(start, end, pathname) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })

    stages.push({
        $project: {
            _id: 0,
            title: 1,
            timestamp: 1,
            project: 1,
            hour: {
                $hour: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            }
        }
    })

    stages.push({
        $group: {
            _id: '$hour',
            num: { $sum: 1 }
        }
    })

    stages.push({
        $sort: {
            _id: 1
        }
    })
    return stages
};





//Performance列表
let getPerformanceStages = function(start, end, pathname,type) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    });
    stages.push({
        $group: {
            _id: '$pathname',
            _type: { $addToSet: '$performance.'+type }
        }
    })
    stages.push({
        $addFields: {
            "_type": {
                $reduce: {
                    input: "$_type",
                    initialValue: [],
                    in: { $concatArrays: ["$$value", "$$this"] }
                }
            }
        }
    })
    stages.push({
       $unwind : { path: "$_type", preserveNullAndEmptyArrays: true }
    })
    stages.push({
        $group: {
            _id: '$_type.url',
            _data: { $push: {time:'$_type.time',url:'$_type.url'} },
            avgtime: { $avg: "$_type.time" }
        }
    })
    return stages
};


//performanceLineStages
let performanceLineStages =  function(start, end, pathname,type) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })

    stages.push({
        $project: {
            _id: 0,
            timestamp: 1,
            domready:"$performance.domready",
            responseStart:"$performance.responseStart",
            hour: {
                $hour: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            }
        }
    })
    stages.push({
        $group: {
            _id: '$hour',
            num: {  $avg: "$"+type }
        }
    })

    stages.push({
        $sort: {
            _id: 1
        }
    })
    return stages
};



//performance7天走势
let sevenPerformanceStages = function(start, end, pathname,type) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            },
            pathname: new RegExp(pathname)
        }
    })

    stages.push({
        $project: {
            _id: 0,
            timestamp: 1,
            domready:"$performance.domready",
            responseStart:"$performance.responseStart",
            project: 1,
            dayOfMonth: {
                $dayOfMonth: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            },
            month: {
                $month: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            },
            year: {
                $year: {
                    date: { $add: [new Date(0), "$timestamp"] },
                    timezone: "+08:00"
                }
            }
        }
    })

    stages.push({
        $group: {
            _id: { day: { $substr: ["$dayOfMonth", 0, 2] }, month: { $substr: ["$month", 0, 2] }, year: { $substr: ["$year", 0, 4] } },
            num: {  $avg: "$"+type },
            timestamp: { $avg: "$timestamp" }
        }
    })

    stages.push({
        $sort: {
            timestamp: 1
        }
    })

    stages.push({
        $project: {
            date: { $concat: ["$_id.year", "-", "$_id.month", "-", "$_id.day"] },
            _id: 0,
            num: 1
        }
    })
    return stages
};


module.exports.lineStages = lineStages;
module.exports.sevenStages = sevenStages;
module.exports.srarchStages = srarchStages;
module.exports.srarchALLStages = srarchALLStages;
module.exports.errorStages = errorStages;
module.exports.errorNumStages = errorNumStages;
module.exports.getErrorStages = getErrorStages;
module.exports.performanceLineStages = performanceLineStages;
module.exports.getPerformanceStages = getPerformanceStages;
module.exports.sevenPerformanceStages = sevenPerformanceStages;
module.exports.pvLineStages = pvLineStages;