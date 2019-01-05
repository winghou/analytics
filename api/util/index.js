let util = {};

//url参数
util.getParam = function(paramName) { 
    let paramValue = "", isFound = !1; 
    if (window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) { 
        let arrSource = window.location.search.substring(1, window.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0] == paramName && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), decodeURIComponent(paramValue)
} 
//时间
util.date = {
	//补零
    formatNum(num) {
        num = ~~num;
        return num < 10 ? 0 + '' + num : num;
    },

    //组装年日月
    //接受[2018, 6, 20]，或(2018, 6, 20)
    //返回yyyy-MM-dd格式日期
    getYMD(...args) {
        let len = args.length;

        if (1 === len) {
            return args[0][0] + '-' + this.formatNum(~~args[0][1]) + '-' + this.formatNum(~~args[0][2]);
        } else if (3 === len) {
            return args[0] + '-' + this.formatNum(~~args[1]) + '-' + this.formatNum(~~args[2]);
        } else {
            return this.getCurDate();
        }
    },

    //一天时间戳
    getTimestamp(day) {
        let timestamp = (day)?+new Date(day+' '):+new Date(this.getYMD()+' ');
       return [timestamp,timestamp+86400000-1]
    },

    // 获取当前年、月、日
    getCurDate(type, sign) {
        sign = sign || '-';

        let date = new Date(),
            year = date.getFullYear(),
            month = this.formatNum(date.getMonth() + 1),
            day = this.formatNum(date.getDate()),
            str = year + sign + month + sign + day;

        if (type === 'y') {
            str = year;
        } else if (type === 'm') {
            str = month;
        } else if (type === 'd') {
            str = day;
        }
        return str;
    },
    //获取n天后日期
    //可传入(2018,6,20,3)，返回2018-06-23
    //可传入(2018-06-20,-3)，返回2018-06-17
    getAfterDate(...args) {
        let len = args.length;

        if (2 === len) {
            return this.formatTime(new Date(args[0]).getTime() + ~~args[1] * 24 * 60 * 60 * 1000);
        } else if (4 === len) {
            return this.formatTime(new Date(this.getYMD(args[0], args[1], args[2])).getTime() + ~~args[3] * 24 * 60 * 60 * 1000);
        }
    },

    //格式化时间
    //输入 时间戳、是否显示时分秒、分隔符
    //默认输出当前年日月
    formatTime: function(date, hms, splits) {
        let d_len = date ? date.toString().length : 0,
            n_num = Number(date),
            n_res = n_num ? (d_len !== 13 ? Number(date + '000') : n_num) : date;

        date = n_res ? new Date(n_res) : '';
        splits = splits || '-';
        hms = hms || false;

        if (!date) {
            date = new Date();
        }

        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),

            dates = [year, month, day].map(this.formatNum).join(splits),
            times = hms ? (' ' + [hour, minute, second].map(this.formatNum).join(':')) : '';

        return dates + times;
    },
    //格式化时间
    //输出时分秒
   getFormatTime: function(date) {
        let d_len = date ? date.toString().length : 0,
            n_num = Number(date),
            n_res = n_num ? (d_len !== 13 ? Number(date + '000') : n_num) : date;

        date = n_res ? new Date(n_res) : '';
        let splits = '-';
        let hms = true;

        if (!date) {
            date = new Date();
        }

        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),

            dates = [year, month, day].map(this.formatNum).join(splits),
            times = hms ? (' ' + [hour, minute, second].map(this.formatNum).join(':')) : '';

        return times;
    },
    //获取上个月份
    getLastMonth(y, m) {
        y = ~~y;
        m = ~~m;

        if (1 >= m) {
            return [y - 1, 12];
        } else {
            return [y, m - 1];
        }
    },

    //获取下个月份
    getNextMonth(y, m) {
        y = ~~y;
        m = ~~m;

        if (12 <= m) {
            return [y + 1, 1];
        } else {
            return [y, m + 1];
        }
    },
    //返回最近7天日期
    getSevenDay(date){
        let _sevenDay = [],i = 6;
        for(i ; i>0 ;i--){
            _sevenDay.push(this.getAfterDate(date,-i))
        }
        _sevenDay.push(date);
        return _sevenDay;
    }

};

module.exports = util;