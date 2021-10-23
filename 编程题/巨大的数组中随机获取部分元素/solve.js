//洗牌算法
function shuffle(arr, size) {
    let length = arr.length;
    for (let index = 0; index < size; index++) {
        //在0到arr.length-index中随机取值
        let randomIndex = Math.floor(Math.random() * (length - index))
        //交换1
        let temp = arr[randomIndex]
        arr[randomIndex] = arr[length - index - 1]
        arr[length - index - 1] = temp
        //交换2
        // arr[randomIndex] = arr[randomIndex] ^ arr[length - index - 1]
        // arr[length - index - 1] = arr[randomIndex] ^ arr[length - index - 1]
        // arr[randomIndex] = arr[randomIndex] ^ arr[length - index - 1]
    }
    //切片交换顺序后的数组
    return arr.slice(-size)
}
console.log(shuffle(Array.from({ length: 1000 }, (v, i) => i), 100));
