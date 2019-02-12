var mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

//performanceStages
let performanceStages =  function(start, end, pathname) {
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
            _id: '$project',
            responseStart_avgtime: { $avg: '$performance.responseStart' },
            domready_avgtime: { $avg: '$performance.domready' }
        }
    })
    return stages
};


//performanceStages
let pvStages =  function(start, end, pathname) {
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
    return stages
};

//Browser
let browserStages =  function(start, end) {
    let stages = [];
    stages.push({
        $match: {
            timestamp: {
                $gte: start,
                $lt: end
            }
        }
    })

    stages.push({
        $group: {
            _id: '$nv.shell',
            num: { $sum: 1 }
        }
    })
    return stages
};



module.exports.performanceStages = performanceStages;

module.exports.pvStages = pvStages;
module.exports.browserStages = browserStages;






