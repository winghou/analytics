//引入mongoose模块
var mongoose = require("mongoose");
// var ip = '106.75.141.117';
var ip = '127.0.0.1';


//activity
var DB_URL_activity = "mongodb://" + ip + ":27017/ycf_activity";
var db_activity = mongoose.createConnection(DB_URL_activity);
db_activity.on("connected", function() {
    console.log("mongoose connection open to db_activity");
});
db_activity.on("error", function() {
    console.log("db_activity error ");
});

//yunke
var DB_URL_yunke = "mongodb://" + ip + ":27017/ycf_yunke";
var db_yunke = mongoose.createConnection(DB_URL_yunke);
db_yunke.on("connected", function() {
    console.log("mongoose connection open to db_yunke");
});
db_yunke.on("error", function() {
    console.log("db_yunke error ");
});

//u
var DB_URL_u = "mongodb://" + ip + ":27017/ycf_u";
var db_u = mongoose.createConnection(DB_URL_u);
db_u.on("connected", function() {
    console.log("mongoose connection open to db_u");
});
db_u.on("error", function() {
    console.log("db_u error ");
});

//m
var DB_URL_m = "mongodb://" + ip + ":27017/ycf_m";
var db_m = mongoose.createConnection(DB_URL_m);
db_m.on("connected", function() {
    console.log("mongoose connection open to db_m");
});
db_m.on("error", function() {
    console.log("db_m error ");
});

//zhuanti
var DB_URL_zhuanti = "mongodb://" + ip + ":27017/ycf_zhuanti";
var db_zhuanti = mongoose.createConnection(DB_URL_zhuanti);
db_zhuanti.on("connected", function() {
    console.log("mongoose connection open to db_zhuanti");
});
db_zhuanti.on("error", function() {
    console.log("db_zhuanti error ");
});

//www
var DB_URL_www = "mongodb://" + ip + ":27017/ycf_www";
var db_www = mongoose.createConnection(DB_URL_www);
db_www.on("connected", function() {
    console.log("mongoose connection open to db_www");
});
db_www.on("error", function() {
    console.log("db_www error ");
});

//rpt
var DB_URL_rpt = "mongodb://" + ip + ":27017/ycf_rpt";
var db_rpt = mongoose.createConnection(DB_URL_rpt);
db_rpt.on("connected", function() {
    console.log("mongoose connection open to db_rpt");
});
db_rpt.on("error", function() {
    console.log("db_rpt error ");
});


//setting
var DB_URL_setting = "mongodb://" + ip + ":27017/ycf_setting";
var db_setting = mongoose.createConnection(DB_URL_setting);
db_setting.on("connected", function() {
    console.log("mongoose connection open to db_setting");
});
db_setting.on("error", function() {
    console.log("db_setting error ");
});

//创建一个Schema  
var schema = mongoose.Schema;

//错误信息Schema
var errorSchema = new schema({
        //设置minitorSchema信息的数据格式
        url: { type: String },
        pathname: { type: String },
        host: { type: String },
        project: { type: String }, //项目名称
        content: { type: String }, //自定义内容
        //错误信息
        errorurl: { type: String },
        errorline: { type: Number },
        errorContent: { type: String, default: 'null' },

        ua: { type: String },
        nv: { type: Object },
        referrer: { type: String }, //来源

        timestamp: { type: Number, default: +new Date() },
        ip: { type: String },

        userId: { type: String, default: 'null' },
        userInfo: { type: String },
        title: { type: String }, //title
    },
    //{versionKey: false}是干嘛用？如果不加这个设置，我们通过mongoose第一次创建某个集合时，
    // 它会给这个集合设定一个versionKey属性值，我们不需要，所以不让它显示
    {
        versionKey: false
    }
);

//pv信息Schema
var pvSchema = new schema({
    //设置minitorSchema信息的数据格式
    url: { type: String },
    pathname: { type: String },
    host: { type: String },
    project: { type: String }, //项目名称
    ua: { type: String },
    nv: { type: Object },
    timestamp: { type: Number, default: +new Date() },
    ip: { type: String },
    title: { type: String }, //title
}, {
    versionKey: false
});

//performance信息Schema
var performanceSchema = new schema({
    //设置minitorSchema信息的数据格式
    url: { type: String },
    pathname: { type: String },
    host: { type: String },
    project: { type: String }, //项目名称
    timestamp: { type: Number, default: +new Date() },
    ip: { type: String },
    performance: { type: Object } //performance信息
}, {
    versionKey: false
});


//设置信息Schema
var settingSchema = new schema({
    //设置minitorSchema信息的数据格式
    project: { type: String }, //项目名称
    robot: { type: Boolean }, //是否开启机器人
    errornumber: { type: Number }, //错误次数
    limit: { type: Number }, //时间限制
    urlRule: {
        type: String
    },
    errorRule: {
        type: String
    }
}, {
    versionKey: false
});

// var rulesSchema = new schema(
//     {
//         project: {
//             type: String
//         },
//         rules: {
//             type: String
//         },
//         urlRule: {
//             type: String
//         },
//         errorRule: {
//             type: String
//         },
//         assetRule: {
//             type: String
//         }
//     },
//     {
//         versionKey: false
//     })

// var logSchema = new schema(
//     {
//         project: {
//             type: String
//         },
//         body: {
//             type: String
//         },
//         date: { type: Date, default: new Date() }
//     },
//     {
//         versionKey: false
//     })

module.exports.activity = db_activity;
module.exports.u = db_u;
module.exports.m = db_m;
module.exports.zhuanti = db_zhuanti;
module.exports.www = db_www;
module.exports.yunke = db_yunke;
module.exports.rpt = db_rpt;

module.exports.setting = db_setting;

module.exports.errorSchema = errorSchema;
module.exports.pvSchema = pvSchema;
module.exports.performanceSchema = performanceSchema;
module.exports.settingSchema = settingSchema;