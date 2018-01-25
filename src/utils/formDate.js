function formDate(curTime,fmt) {
    // let curTime = new Date();
    // let fmt = 'yyyy-MM-dd hh:mm';
    //匹配 以y开头的字符串
    if (/(y+)/.test(fmt)){

//            格式化年
        fmt = fmt.replace(RegExp.$1,(curTime.getFullYear()+'').substr(4-RegExp.$1.length));
    }

    let o = {
        'M+':curTime.getMonth() +1,
        'd+':curTime.getDate(),
        'h+':curTime.getHours(),
        'm+':curTime.getMinutes(),
        's+':curTime.getSeconds()
    }

//        格式化 月 日 时 分 秒
    for (let k in o){
        if (new RegExp(`(${k})`).test(fmt)){
            let  str = o[k] +'';
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length ===1) ? str:padLeftZero(str));
        }
    }
    return fmt;
};
function padLeftZero(str) {
    return ('00'+str).substr((str.length));
}
export default formDate;