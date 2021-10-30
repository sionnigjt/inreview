function roteArray(arr = [], number) {
    return arr.slice(-number).concat(arr.slice(0, - number))
}
function roteArray2(arr = [], number) {
    return arr.splice(-number).concat(arr)
}
console.log(roteArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log(roteArray2([1, 2, 3, 4, 5, 6, 7], 2));