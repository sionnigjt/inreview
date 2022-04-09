//7 种原始类型:原始值不可转换,一般是生成新值
let thisString = "string"
let thisNumber = 123//NaN是number类型
let thisNull = null
let thisSymbol = Symbol()
let thisUnderfined = undefined
let thisBoolean = true//注意 new Boolean是对象
let thisBigInt = BigInt(123456)
//保存原始值
let originalType = [thisString, thisNumber, thisNull, thisSymbol, thisUnderfined, thisBoolean, thisBigInt]
//几种对象
let thisArray = ["1", "2", "3"]
let thisDate = new Date()
let thisObject = { 1: 123 }
let thisNewBoolean = new Boolean(true)
let thisError = new Error()
let thisMap = new Map()
let thisfn = function () { }
//保存对象
let objectType = [thisArray, thisDate, thisObject, thisNewBoolean, thisError, thisMap, thisfn]
{
    //一般使用 typeof查看类型
    //缺点:null Date等类型都会视为object
    //演示
    typeofBytypeof(originalType)
    console.log('------------');
    typeofBytypeof(objectType)
    function typeofBytypeof(arr = []) {
        arr.forEach(value => {
            console.log(value, 'is ' + typeof value);//value后不加+的原因是:防止强制转换为String
        })
    }
}
console.log('------------');
{
    //由于在JavaScript中，几乎所有的对象都是Object类型的实例
    //可以尝试使用Object的原型中的toString()查看类型
    //验证:可以看出几种类型都没有错误
    typeofByTostring(originalType)
    console.log('------------');
    typeofByTostring(objectType)
    function typeofByTostring(arr = []) {
        arr.forEach((value) => {
            console.log(value, 'is ' + Typeof(value));//value后不加+的原因是:防止强制转换为String
        })
    }
    function Typeof(arg) {
        return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
    }
}