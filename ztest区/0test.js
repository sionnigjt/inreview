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
