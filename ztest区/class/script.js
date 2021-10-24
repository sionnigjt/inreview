// class Test{
//     constructor(id, name) {
//         this.id = id
//         this.name=name
//     }
// }
// //继承
// class mytest extends Test{
    
// }
// const b = 10;
// //函数声明大于变量声明
// (function b() {
//     //函数内部
//     let b = 20;
//     console.log(this.b);
//     console.log(b)
// })()
// // example 1
//sybmol的使用
var a = {}, b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);
var a = {}, b = Symbol('123'), c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a);
//生成器函数
function* countAppleSales() {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}
var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next().value); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }