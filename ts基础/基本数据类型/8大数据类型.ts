let str: string = "test"
let num: number = 24
let boolen: boolean = true
let u: undefined = undefined
let n: null = null
let obj: Object = { x: 1 }
let bigint: bigint = 100n
let symbol: symbol = Symbol("test")
//注意点
//null 和 undefined 是所有类型的子集
//number 和 bigint 都表示数字但是不兼容
//其他类型 array的定义方法 
let arr1: string[] = ['1', '2']
let arr2: Array<string> = ['2', '32']
