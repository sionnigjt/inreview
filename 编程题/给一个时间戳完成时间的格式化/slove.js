function formatTime(date = 12) {
    if (date.toString().length != 13) {
        throw new Error("时间戳有问题")
    }
    let time = new Date(date)
    let nowTime = new Date()

}
console.log(formatTime(1635570367487));