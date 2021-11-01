function remveZero(num = []) {
    //不满足条件
    //必须在原数组上操作，不能拷贝额外的数组。
    //尽量减少操作次数。
    let obj = num.reduce((pre, value) => {
        if (value == 0) {
            pre.zero++
        }
        else {
            pre.arr.push(value)
        }
        return pre
    }, { arr: [], zero: 0 })

    return obj.arr.concat(Array.from({ length: obj.zero }).map(() => 0))
}
function removeZero2(num = []) {
    //正确的操作,时间复杂度(O(n))
    let length = num.length, count = 0
    for (let index = 0; index < length; index++) {
        if (num[index] === 0) {
            count++
        }
        else if (num[index] !== 0) {
            num[index - count] = num[index]
            num[index] = 0
        }
    }
}

console.log(remveZero([0, 2, 1, 3, 0, 1]));
