/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.split('').filter((value) => {
        if ((value >= 0 && value <= 9) || value == '+' || value == '-')
            return true
    }).join('')

    return Number(s)
};
console.log(myAtoi('-123453.1'));
