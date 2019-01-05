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
    },
    {
        versionKey: false
    }
);

//performance信息Schema
var performanceSchema = new schema({
        //设置minitorSchema信息的数据格式
        url: { type: String },
        pathname: { type: String },
        host: { type: String },
        project: { type: String }, //项目名称
        timestamp: { type: Number, default: +new Date() },
        ip: { type: String },
        performance:{type:Object}//performance信息
    },
    {
        versionKey: false
    }
);

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
module.exports.errorSchema = errorSchema;
module.exports.pvSchema = pvSchema;
module.exports.performanceSchema = performanceSchema;