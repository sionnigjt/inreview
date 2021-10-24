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
console.log (typeof {1:1});