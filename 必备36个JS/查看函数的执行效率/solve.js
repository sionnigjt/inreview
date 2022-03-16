function efficiency(fn, ...arg) {
    if (typeof fn === 'function') {
        console.time();
        fn.apply(this, arg)
        console.timeEnd()
    }
    else {
        console.log(new Error("第一个参数应为函数"));
    }
}
function add(a, b) {
    return a + b
}
efficiency(add, 1, 2)