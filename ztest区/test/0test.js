var list = [{
    id: '1',
    children: [{
        id: '11',
        children: [{
            id: '111'
        }, {
            id: '112'
        }]
    }, {
        id: '12',
        children: [{
            id: '121'
        }, {
            id: '122'
        }]
    }]
}]
console.log(...list);

let a = 1, b = 8
function test(...agrs) {
    console.log(agrs);
}
console.log(test(a, b));
//结果
console.log(typeof { 1: 1 });
console.log([1, "1"]);

let duixiang = { 12: 23, "wewe": 2453, we: 123 }
console.log(duixiang[12]);

console.log([1, 23, 4].filter((value) => value == 23 ? false : true));
class A {
    constructor(a) {
        this.a = a
    }
    show() {
        console.log(this.a);
    }
}
let afunction = new A("b")
afunction.show()

//休眠函数,精度不够
function sleep(time) {
    return new Promise(res => setTimeout(res, time))
}
let time1 = new Date()

let time2
// sleep(1000).then(() => {
//     time2 = new Date()
//     console.log(time2 - time1);
// })
//两个date相减即为毫秒差

let map = new Map([])
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
console.log('//////');

var array = ['a', 'b'];
var elements = [0, 1, 2];
var array2 = ['11', '22']
array2.push.apply(array, elements);
console.info(array, array2); // ["a", "b", 0, 1, 2]

var obj = {
    str: "sdd",
    a: function () {
        console.log(this.str);
    }
};

setTimeout(obj.a.bind(obj), 1000);
