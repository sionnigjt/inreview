//bind:bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
//而其余参数将作为新函数的参数，供调用时使用。
{
    //参数:function.bind(thisArg[, arg1[, arg2[, ...]]])
    //bind() 函数会创建一个新的绑定函数,类似于柯西里化函数

    x = 9;    // 此处对象在全局
    this.x = 10//此对象在{}中
    var module = {
        x: 81,
        getX: function () { return this.x; }
    };

    console.log(module.getX()); // 81

    var retrieveX = module.getX;
    //前者this是全局变量,x变量提升了,后者this是局部变量
    console.log(retrieveX(), this.x);
    // 返回 9 - 因为函数是在全局作用域中调用的

    // 创建一个新函数，把 'this' 绑定到 module 对象
    // 新手可能会将全局变量 x 与 module 的属性 x 混淆
    var boundGetX = retrieveX.bind(module);
    console.log(boundGetX()); // 81
}
//bind用法其二:偏函数:同柯西里化
{
    function addNumber(a, b) {
        return a + b
    }
    const newAddNumbr = addNumber.bind(null, 1)
    console.log(newAddNumbr(2));
}