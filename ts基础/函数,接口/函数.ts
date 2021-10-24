//函数声明
function sum(x: number, y: number): number {
    return x + y
}
console.log("函数声明" + sum(2, 3));
//函数表达式
//右侧匿名函数,由类型推断左边
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
//给左边定义类型
let mysum2 = function (x: number, y: number): number {
    return x + y
}
console.log("函数表达式" + mySum(3, 4), mysum2(1, 3));
//可选参数
let mysum3 = function (x: number, y?: number): number {
    if (y) return x + y
    return x
}
//默认参数,剩余参数同js

//函数重载

console.log("可选参数" + mysum3(2), mysum3(23, 4));
//接口定义
interface Sum {
    (x: number, y: number): number
}

