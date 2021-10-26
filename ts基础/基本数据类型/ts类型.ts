//原始类型
{
    let str: string = "test"
    let num: number = 24
    let boolen: boolean = true
    let und: undefined = undefined
    let nul: null = null
    let obj: Object = { x: 1 }
    let bigint: bigint = 100n
    let symbol: symbol = Symbol("test")
}
//注意点
//null 和 undefined 是所有类型的子集
//number 和 bigint 都表示数字但是不兼容
//其他类型 array的定义方法 
{
    let arr1: string[] = ['1', '2']
    let arr2: Array<string> = ['2', '32']
}
//元组定义:储存不同数据类型的数组
{
    let tuple: [string, number] = ['h', 1]
    tuple = ["hi", 12]//正确类型,其他都是错的
    //解构赋值
    let [x, y] = tuple
    //反单引号
    console.log(`x:${x}, y:${y}`);
    //元组中的可选元素
    let optionTuple: [string, boolean?]
    optionTuple = ['1']
    console.log(optionTuple[0]);
    //元组的剩余元素,...X是数组类型,不同于js的剩余元素添加
    type restType = [number, ...string[]]
    let tuple2: restType = [123, 'm2341', ',24']
    console.log(tuple[1]);
}

//readonly类型
{
    let constTuple: readonly [string, any] = ['wd', { "wqeqw": "adw" }]
    //constTuple[0] = "ChannelMergerNode"//无法分配到 "0" ，因为它是只读属性
}
//void类型,仅仅有null,underfined
//never类型,仅仅有它本身,null和undefined不是其子类,使用目的写出类型绝对安全的代码
{
    let testNever: never
}
// console.log(testNever = null);//不能将类型“null”分配给类型“never”
//any类型,识别为除void,never的所有类型,注意未指定类型时默认是any类型
//unknown:所有类型可以赋值给它,但它只能赋值给unknown,any
{
    let testUnknown: unknown, ntest: string
    console.log(testUnknown = "test");
    //console.log(ntest = testUnknown);//不能将类型“unknown”分配给类型“string”
}
//对象类型 Number、String、Boolean、Symbol 
{
    let num_littel: number
    let num_big: Number
    // console.log(num_littel = num_big);//不能将类型“Number”分配给类型“number”。
    console.log(num_big = num_littel);
}
//结论原始类型兼容对象类型

//object:所有非原始类型、Object:拥有 toString、hasOwnProperty 方法的类型包括原始类型和非原始类型 和 {}
{
    type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true : false; // true
    type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true : false; // true
}
//结论互为子类型