// Object:对象={}
//object的构造函数的属性:
{
    console.log(Object.length);//1
    console.log(Object.prototype);//[Object: null prototype] {}
}
//object的静态方法:
//1.object.assign():通过复制一个或多个对象来创建一个新的对象(返回原对象)
{
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    let returnTarget = Object.assign(target, source)
    console.log(returnTarget == target, returnTarget);
    //作用:复制一个对象
    console.log(Object.assign({}, target));
    //作用:合并一个对象
    console.log(Object.assign(target, source));
    let arr = [[[233], 2], 31, 23, 1]
    let objarr = Object.assign({}, arr)
    console.log(objarr, arr);
    arr[0][0] = 1
    console.log(objarr, arr);
    //说明:对数组也是浅拷贝

}
//2,Object.creat():创造一个对象
{
    // 参数: Object.create(proto，[propertiesObject])
    //proto:原型,propertiesObject:可选对象
    //返回:一个新对象，带着指定的原型对象和属性。
    let preson = {
        name: 'hi',
        isshow: function () {
            console.log(this.name);
        }
    }
    Object.create(preson).isshow()
}
//后续待定