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
function intersect2(num1 = [], num2 = []) {
    let map = {};
    let ans = []
    map = num1.reduce((previous, current) => {
        previous[current] ? previous[current]++ : previous[current] = 1
        return previous
    }, {});
    num2.forEach((currentValue) => {
        if (map[currentValue] > 0) {
            ans.push(currentValue)
            map[currentValue]--
        }
    })
    return ans
}

let array1 = [1, 2, 12, 3, 4, 3, 5, 352, 33, 4, 5, 6]
let array2 = [1, 4, 3, 4, 5, 6]
console.log(intersect2(array1, array2));

const intersection = function (...argArray) {
    //验证数据
    if (argArray.length === 0) return [];
    if (argArray.length === 1) return argArray[0]
    //利用reduce,filter筛选第一个数组中的每个值,最后去重
    return [...new Set(argArray.reduce((result, value) => result.filter(item => value.includes(item))))]
}
console.log(intersection([1, 2, 3, 4], [2, 34, 5], [54, 6, 7, 2]));
