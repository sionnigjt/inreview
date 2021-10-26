//类型推断
{
    let str = "fss"
    let num = 13
    console.log(typeof str, typeof num);
    const cnum = 132
    console.log(typeof cnum);
    let teststr
    console.log(typeof teststr);
    teststr = "435"
    teststr = 314
    console.log(typeof teststr);
}
//结论:若有初始值,类型以初始值为准,若无,则初始为undefined类型,隐式具有 "any" 类型,以新赋值的类型为准

//类型断言:好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
//用法:as或者<>
{
    const arrayNumber: number[] = [1, 2, 3, 4];
    // const greaterThan2: number = arrayNumber.find(num => num > 2); // 提示 error TS2322: Type 'number | undefined' is not assignable to type 'number'
    //更改,由于类型推断认为 arrayNumber.find(num => num > 2)的Type 'number | undefined'
    const greaterThan3: number = arrayNumber.find(num => num > 2) as number
    const greaterThan4: number = <number>arrayNumber.find(num => num > 2)
    console.log(greaterThan3, greaterThan4);
}
//非空断言,用法:x! 将从 x 值域中排除 null 和 undefined 。
{
    let mayNullString: string | null = null
    console.log(typeof mayNullString);
}
//确定赋值断言
{
    let comfirmValue!: string
    console.log(comfirmValue);
    comfirmValue = "test"
}
//作用,使编译器明知道会赋值

//字面量类型,ts目前支持:字符,数值,布尔字面量类型
{
    let specifiedStr: 'this is string' = 'this is string';
    let specifiedNum: 1 = 1;
    let specifiedBoolean: true = true;
}
//我理解的,字面量是其原始类型的子集
{
    let specifiedStr: 'this is string' = 'this is string';
    let str: string = 'any string';
    //specifiedStr = str; // ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'
    str = specifiedStr; // ok 
}
//作用,明确需要的数据类型
{
    type upOrdown = 'up' | 'down'
    function move(direction: upOrdown) {
        ///
    }
    move('up')//ok}
}
//move('change')//fase//类型“"change"”的参数不能赋给类型“upOrdown”的参数。
//const let区别
{
    const specifiedStr = 'this is string';//为字符串字面量
    let specifiedStr3 = 'this a string';//string
}

//类型拓宽,类型缩小,暂定

//联合类型,用法:|,通常与null,undefined一起使用
//类型别名:用法type
//交叉类型,用法:&,通常合并接口类型
{
    type mayNullNumber = number | null
    let eat: string | number
    function addnumber(n: mayNullNumber) {
        ///
    }
    type Useless = string & number;//只有never满足条件
    //产生合并现象
    type IntersectionType = { id: number; name: string; } & { age: number };
    const mixed: IntersectionType = {
        id: 1,
        name: 'name',
        age: 18
    }
}

