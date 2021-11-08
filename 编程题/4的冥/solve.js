//title:判断一个数(32位有符号)是否是4的冥指数
const isPowerOfFour = function (num) {
    if (num == 1) return true
    if (num < 4) return false
    //利用2进制性质,4的冥及2的偶数冥,1010101010101010101010101010=0x55555555,
    return (num & 0x55555555) === num
}
const isPowerOfFour2 = function (num) {
    if (num == 1) return true
    if (num < 4) return false
    //4^n-1必然为连续的1
    return ((num - 1 & num) == 0 && (num - 1) % 3 == 0)
}
const isPowerOfFour3 = function (num) {
    //传统的循环判断,不推荐
    while (num > 1) {
        num = num / 4
    }
    return num == 1
}
console.log(isPowerOfFour2(16));
