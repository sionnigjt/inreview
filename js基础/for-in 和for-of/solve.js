//for in:遍历枚举类型
let arr = [23, 124, 4, 5, 5, 5, 4]
for (const key in arr) {
    console.log(key);
}
//for  0f:遍历可迭代类型
console.log("-------");
for (const iterator of arr) {
    console.log(iterator);
}