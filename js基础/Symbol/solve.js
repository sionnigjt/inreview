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
