// typeof:基本用途
let a = function () {
    console.log('hi');
}
let b = 1
let c = '1'
let d = [1]
let e = { 1: 1 }
//寻找数据类型
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);
//判断类型
console.log(typeof a == 'function');