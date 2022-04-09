//Symbol的作用:一般用于创建对象的键:防止对象名冲突
let obj, A, B
{
    //symbol的创建
    A = Symbol('任意字符做标记')
    //全局symbol的创建
    B = Symbol.for("任意字符做标记")

    {
        //使用
        obj = { A: 12, B: 23 }//错误
        obj[A] = 1
        obj[B] = 2
        console.log(obj[A], obj.A);
    }
    //特点 symbol在循环中,Object.keys()都不显示,Reflect.ownKeys中可以显示
    console.log(Reflect.ownKeys(obj), Object.keys(obj));
}
//与json相关
{
    //直接输出json,不会有symbol语句
    console.log(JSON.stringify(obj), obj);
    //你可能回想利用Object.defineProperty的设置枚举为true破解
    Object.defineProperty(obj, A, {
        enumerable: true,
        configurable: true,
        value: "A"
    })
    //事实上并不可以,json不支持symbol
    console.log(JSON.stringify(obj), Object.keys(obj), Object.getOwnPropertySymbols(obj));
}
//主要作用:私有变量
{
    let A = Symbol()

}
//Symbol.toPrimitive
{
    // 一个没有提供 Symbol.toPrimitive 属性的对象，参与运算时的输出结果
    var obj1 = {
        get [Symbol.toStringTag]() {
            return "Validator";
        },
        toString() {
            return "str"
        },
        valueOf() {
            return "123"
        },
        a: 12
    };
    console.log(+obj1);     // NaN
    console.log(`${obj1}`); // "[object Object]"
    console.log(obj1 + "", Object.prototype.toString.call(obj1)); // "[object Object]"

    // 接下面声明一个对象，手动赋予了 Symbol.toPrimitive 属性，再来查看输出结果
    var obj2 = {
        [Symbol.toPrimitive](hint) {
            if (hint == "number") {
                return 10;
            }
            else if (hint == "string") {
                return "hello";
            }
            else {
                console.log(hint);
                return true;
            }

        },


    };
    console.log(+obj2);     // 10      -- hint 参数值是 "number"
    console.log(`${obj2}`); // "hello" -- hint 参数值是 "string"
    console.log(obj2 + "", Object.prototype.toString.call(obj2)); // "true"  -- hint 参数值是 "default"
}