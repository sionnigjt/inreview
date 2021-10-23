const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];
function getIndex1(arr) {
    let index = null;
    let min = Infinity
    //一次循环找到最小值的下标
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && min > arr[i]) {
            index = i;
            min = arr[i]
        }
    }
    return index
}
function getIndex2(arr) {
    //最精简的,但是时间复杂度高个人感觉(o3)
    return arr.indexOf(Math.min(...arr.filter(v => v > 0)));
}
function getIndex3(arr) {
    //一次循环,把previous的初始值数组,因为需要比较值和下表值,利用三目运算判断大于0且值最小的下标
    //reduce返回previous,在这里是数组,返回下标所以最后加[1]
    return arr.reduce((previous, current, index) => {
        return (current > 0 && current < previous[0]) ? [current, index] : previous
    }, [Infinity, -1])[1];
}

console.log(getIndex3(arr))