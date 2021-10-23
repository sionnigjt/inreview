//在原型链上实现
Number.prototype.add = function (n) {
    return this.valueOf() + n
}
Number.prototype.minus = function (n) {
    return this.valueOf() - n
}

console.log((2).add(1).minus(2));