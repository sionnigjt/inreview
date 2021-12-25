function to_arry(number_str = '20001-40000') {
    let number_arry = number_str.split('-')
    let ans_arry = Array.from({ length: Number(number_arry[1] - number_arry[0]) }, (value, index) => index + 1 + Number(number_arry[0]))
    // console.log(ans_arry);
    return ans_arry
}
function all_to_arry(str = '2001-2003 2300  2400-2405') {
    let may_continual_arry = str.trim().split(/\s+/), ans = []
    for (const item of may_continual_arry) {
        //连续的如何处理
        if (item.split('-').length == 2) {

            ans.push(...to_arry(item))
        }
        else {
            ans.push(Number(item))
        }

    }
    // console.log(ans);
    return ans
}
// to_arry()
all_to_arry()
function reverse_solve(number_arry = [100, 101, 102, 103, 106, 108]) {
    return number_arry.reduce((pre, value, index) => {
        //连续
        if (value + 1 == number_arry[index + 1]) {
            pre.end = index + 1
        }
        else {

            if (pre.flag == pre.end) {
                pre.ans += number_arry[pre.flag] + ' '
                pre.count = 0
            }
            else {
                pre.ans += number_arry[pre.flag] + '-' + number_arry[pre.end] + ' '
                pre.count = 0
            }
            pre.flag = index + 1
            pre.end = index + 1
        }
        return pre
    }, { "flag": 0, "end": 0, "ans": "", count: 0 }).ans

}
console.log(reverse_solve());
console.log(all_to_arry());
console.log(reverse_solve(all_to_arry()));
console.log(all_to_arry(reverse_solve())); 