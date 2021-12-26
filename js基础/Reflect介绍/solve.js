//Reflect是一个内置的对象，它提供拦截 JavaScript 操作的方法
{
    //基本的js操作方法都有所拦截的
    {
        // Reflect.apply(target, thisArgument, argumentsList)
        // Reflect.construct(target, argumentsList)
        // Reflect.deleteProperty(target, propertyKey)
        // Reflect.get(target, propertyKey)
    }
    //等等
}
{
    //检测是否有特定元素
    let obj = { A: 'a', b: 'B' }
    {
        //传统方法
        console.log(obj.hasOwnProperty('A'));
        console.log(Object.keys(obj).includes("A"));//不推荐
    }
    {
        //使用Reflect
        console.log(Reflect.has(obj,'A'));
    }

}