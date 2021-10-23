function intersect1(num1, num2) {
    const map = {};
    const ans = [];
    //构建哈希表
    for (let key of num1) {
        if (map[key])
            map[key]++
        else map[key] = 1
    }
    //从哈希表中查相同值
    for (let key of num2) {
        if (map[key] > 0) {
            ans.push(key)
            map[key]--
        }

    }
    return ans
}
function intersect2(num1, num2) {
    let map = {};
    let ans = []
    map = num1.reduce((previous, current) => {
        previous[current] ? previous[current]++ : previous[current] = 1
    }, {});
    num2.foreach((currentValue) => {
        if (map[currentValue] > 0) {
            ans.push(currentValue)
            map[currentValue]--
        }
    })
}

let array1 = [1, 2, 12, 3, 4, 3, 5, 352, 33, 4, 5, 6]
let array2 = [1, 4, 3, 4, 5, 6]
console.log(intersect2(array1, array2));