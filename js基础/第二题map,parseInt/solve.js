//paseInt ,toString
//对象的tostring-toString() 方法返回一个表示该对象的字符串。,
//number的tostringtoString() 方法返回指定 Number 对象的字符串表示形式 numObj.toString([radix])
console.log(parseInt("110", 2)) //二进制转换
console.log(("6").toString(2))
//var new_array = arr.map(function callback(currentValue[,index[, array]]) {
// Return element for new_array}[, thisArg])
Array.from(['10', '10', '10', '10', '10']).map(parseInt);
//等效于
Array.from(['10', '10', '10', '10', '10']).map((item, index) => {
    return parseInt(item, index)
})
//即parseInt('10',index)
//解决方法
console.log(Array.from(['10', '10', '10', '10']).map(n => parseInt(n)));


