function makeDate(date) {
    try {
        var newDate = new Date(date);

        //在小于10的月份前补0

        var month = eval(newDate.getMonth() + 1) < 10 ? '0' + eval(newDate.getMonth() + 1) : eval(newDate.getMonth() + 1);

        //在小于10的日期前补0

        var day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();

        //在小于10的小时前补0

        var hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();

        //在小于10的分钟前补0

        var minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();

        //在小于10的秒数前补0

        var seconds = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();

        //拼接时间

        var stringDate = newDate.getFullYear() + '-' + month + '-' + day + " " + hours + ":" + minutes + ":" + seconds;

    } catch (e) {
        var stringDate = "0000-00-00 00:00:00";

    } finally {
        return stringDate;

    }
}

function format(time){
    for (var i = 0; i < time.length; i++) {
        if (time[i].logout_time != null) {
            time[i].create_time = makeDate(time[i].create_time);
            time[i].logout_time = makeDate(time[i].logout_time);
        } else {
            time[i].create_time = makeDate(time[i].create_time);
            time[i].logout_time = '使用中';
        }
    }
}

module.exports =format;