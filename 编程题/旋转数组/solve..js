function roteArray(arr = [], number) {
    return arr.slice(-number).concat(arr.slice(0, - number))
}
function roteArray2(arr = [], number) {
    //spilce返回修改后的值组成的数组,原数组也会被修改
    return arr.splice(-number).concat(arr)
}
console.log(roteArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log(roteArray2([1, 2, 3, 4, 5, 6, 7], 2));
  