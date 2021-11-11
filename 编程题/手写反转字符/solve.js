function reserve(str = "") {
    let ans = ''
    for (let index = str.length - 1; index >= 0; index--) {
        console.log(str[index]);
        ans = ans.concat(str[index])
    }
    return ans
}
console.log(reserve('123'));
