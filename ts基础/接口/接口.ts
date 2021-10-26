//接口:行为的抽象描述,ts中类和对象皆可使用
{
    interface Person {
        name: string,
        age: number
    }
    let tom: Person = {
        name: "tom",
        age: 25
    }
    console.log(tom);//{ name: 'tom', age: 25 }
    let alice: Person
    {
        name: "alice"
    }
    // console.log(alice);//'alice' is used before being assigned.
    //总结必需符合一对一原则,多了少了都不行

    //解决可选问题:使用可选参数,只读类型
    interface PersonUserName {
        readonly name: string
        age?: number
    }
    let alicen: PersonUserName = {
        name: "alice"
    }
    // alicen.name = "fw"//无法分配到 "name" ，因为它是只读属性。
    console.log(alicen);

    //解决没有其他任意属性的问题
    //引入索引签名
    // 数字索引: 通过定义接口用来对 数组 的约束,字符索引: 通过定义接口用来对 对象 的约束
    interface PersonString {
        [optionName: string]: string,
    }
    interface PersonNumber {
        name: string
        [optionNumber: number]: number
    }
    let PersonStringTest: PersonString = {
        namestring: "sdfaf",
        agestring: "4312"
    }
    let PersonNumberTest: PersonNumber = {
        name: "231",
        123: 4,
        1234: 5
    }
    //对比别名,用途基本一致,接口:定义数据模型
    ///不同点:语法不同,别名使用类型广,接口可以定义多次
    //拓展
    interface PersonNumberextend extends PersonNumber {
        y: string
    }
    type PersonNumberType = { y: string } & PersonNumber
}