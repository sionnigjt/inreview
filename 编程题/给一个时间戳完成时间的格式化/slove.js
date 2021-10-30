function formatTime(date = 12) {
    //验证
    if (date.toString().length != 13) {
        throw new Error("时间戳有问题")
    }
    //设置时分秒
    const MIN = 60 * 1000;
    const HOUR = 60 * MIN;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    //相差时间毫秒数
    let gapTime = new Date() - new Date(date)
    //判断在那个区间//优化可用哈夫曼编码
    if (gapTime < MIN) return '刚刚';

    else if (gapTime < HOUR) return Math.floor(gapTime / MIN) + '分前';

    else if (gapTime < DAY) return Math.floor(gapTime / HOUR) + '小时前';

    else if (gapTime < WEEK) return Math.floor(gapTime / DAY) + '天前';

    else return new Date(date).toISOString()

}
console.log(formatTime(1635570367487));