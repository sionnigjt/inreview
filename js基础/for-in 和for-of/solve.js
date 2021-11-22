//数组
{//for in:遍历枚举类型
    let arr = [23, 124, 4, 5, 5, 5, 4]
    for (const key in arr) {
        console.log(key);
    }
    //for  0f:遍历可迭代类型
    console.log("-------");
    for (const iterator of arr) {
        console.log(iterator);
    }
}
// 对象
{
    //in:直接遍历键
    let obj = { 1: 23, 4: 34, 3: 34, a: 33 }
    for (const key in obj) {
        console.log(key);
    }
    //of:无法直接遍历,需要使用函数把键值提取出来
    for (const iterator of Object.keys(obj)) {
        console.log(iterator);
    }
}