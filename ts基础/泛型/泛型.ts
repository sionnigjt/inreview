//泛型变量:T 是一个抽象类型，只有在调用的时候才确定它的值
{
    function show<T>(args: T): T {
        return args
    }
    //常见泛型变量,K(对象中的键类型),V(对象中的值类型),E(元素类型)
    //使用多个变量
    function doubleShow<T, U>(a: T, b: U): void {
        console.log(a, b);
    }
}
//泛型约束:利用到接口
{
    interface interNumer {
        num: number
    }
    function numshow<T extends interNumer>(args: T): void {
        console.log(args.num);
    }
    numshow({ num: 123 })
    //numshow({fe:sfe})类型“{ fe: any; }”的参数不能赋给类型“interNumer”的参数。
    type numstring = number | string
    function typeshow(args: numstring) {
        console.log(args);
    }
    typeshow(12)
    //typeshow(null)//Argument of type 'null' is not assignable to parameter of type 'numstring
}
//泛型约束工具
//1.typeof:类型上下文中获取变量或者属性的类型
{
    interface interNumer {
        num: number
    }
    const test: interNumer = { num: 123 }
    type sem = typeof test

}
//2.keyof:获取某种类型的所有键
{
    interface Person {
        name: string;
        age: number;
    }

    type K1 = keyof Person; // "name" | "age"

    let duixiang = { 12: 23, "wewe": 2453, we: 123 }
    //问题:不能正确返回键值
    // function prop(obj: object, key: string) {
    //     return obj[key];
    // }
    // console.log(prop(duixiang, 'wewe'));//  No index signature with a parameter of type 'string' was found on type '{}'.\r\n",
    //暴力解决方法
    function prop1(obj: object, key: string) {
        return (obj as any)[key]
    }
    console.log(prop1(duixiang, 'wewe'))
    //利用keyof解决问题
    function prop2<T, R extends keyof T>(obj: T, key: R) {
        return obj[key]
    }
    console.log(prop2(duixiang, "wewe"))
}
//3.in,extends
{
    //in:用来遍历枚举类型
    type Keys = "a" | "b" | "c"
    type Obj = {
        [p in Keys]: any
    } // -> { a: any, b: any, c: any }
    //extends
    //前面有,利用继承接口约束

}
//4.类型约束
{
    let person = {
        name: 'musion',
        age: 35
    }

    function getValues(person: any, keys: string[]) {
        return keys.map(key => person[key])
    }
    console.log(getValues(person, ["gende"]));//返回undefined
    //对此进行约束
    function getvaluesByrestrain<T, E extends keyof T>(person: T, keys: E[]): T[E][] {
        return keys.map(key => person[key])
    }
    // console.log(getvaluesByrestrain(person, ["gende"]));//不能将类型“"gende"”分配给类型“"name" | "age"”
    //约束成功
}
//5.映射类型
{
    interface TestInterface {
        name: string,
        age: number
    }
    type OptionalTestInterface<T> = {
        [p in keyof T]?: T[p]
    }
    type newTestInterface = OptionalTestInterface<TestInterface>
    let newTestInterfaceTest: newTestInterface = {}//变成可选参数
    //let TestInterfaceTest: TestInterface={}//{}”缺少类型“TestInterface”中的以下属性: name, age
}
//5.内置工具类型