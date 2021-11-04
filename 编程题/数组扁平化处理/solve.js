//title:按深度去除数组内部的多余的括号
var arr = [[1, 2, 3], [2, 3, 4, 4, 45, 5], [6, 7, 8, 5]]
function flatern1(arr = []) {
    //利用toString的性质
    let setArry = new Set(arr.toString().split(',').sort((a, b) => a - b))
    return Array.from(setArry).map((value) => Number.parseInt(value))
}
//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
function flatern2(arr) {
    return Array.from(new Set(arr.flat(4))).sort((a, b) => a - b)
}
console.log(flatern1(arr));
console.log(flatern2(arr));