let num = 1223124.4124//格式化为1,223,124.4124
function formatNumber(num = 1) {
    //先分为小数点前和小数点后
    let middle = num.toString().split('.')
    let prenumber = middle[0]
    let lastNumber = middle[1]
    //格式化小数点前的数字
    //用正则
    let formatPreNumber = prenumber.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',')
    return formatPreNumber.concat('.').concat(lastNumber)

}
function formatNumber4(num) {
    //先分为小数点前和小数点后
    let middle = num.toString().split('.')
    let prenumber = middle[0]
    let lastNumber = middle[1]
    //使用函数
    let formatPreNumber = function (numstring = '') {
        return numstring.split('').reverse().reduce((pre, value, index) => {
            pre.push(value)
            if ((index + 1) % 3 == 0) {
                pre.push(',')
            }
            return pre
        }, []).reverse().join('')
    }
    return formatPreNumber(prenumber).concat('.').concat(lastNumber)
}
function formatNumber2(num = 0) {
    //使用number中的api
    return num.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 5 })
}
function formatNumber3(num) {
    //使用Intl来格式化数字
    return Intl.NumberFormat(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 5 }).format(num)
}
console.log(formatNumber(num));
console.log(formatNumber2(num));
console.log(formatNumber3(num));
console.log(formatNumber4(num));