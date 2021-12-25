const where_not_used = function () {
    return where.caller.name
};

const where1 = function () {
    let reg = /\s+at\s(\S+)\s\(/g
    let str = new Error().stack.toString()
    let res = reg.exec(str) && reg.exec(str)
    return res[0] &&res[1]
}

const where = function () {

    let str = new Error().stack.toString()
    return 0
}
function hi() {
    console.log('hi');
    where()
}
hi()