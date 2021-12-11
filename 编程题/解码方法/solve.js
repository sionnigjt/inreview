const solve = function (s = '') {
    //利用动态规划做题
    //参数验证
    if (s.length <= 0) {
        return 0
    }
    //构建dp[]:初始化为零
    let dp = Array(s.length + 1).fill(0)
    //初始化dp
    dp[0] = s[0] == "0" ? 0 : s[1] == "0" ? 0 : 1, dp[1] = ((s[0] + s[1]) <= 26 && (s[0] + s[1]) >= 10) ? dp[0] + 1 : dp[0]
    //计算过程
    //dp[i]=(dp[i-1]+判断str[i]是否是满足条件)+(dp[i-2]+判断str[i]和[i-1]是否满足条件)
    for (let index = 2; index < s.length; index++) {

        let first = s[index]
        let second = s[index - 1] + s[index]
        if (first >= 1 && first < 10) {
            dp[index] = dp[index - 1]
        }
        if (second >= 10 && second <= 26) {
            dp[index] += dp[index - 2]
        }

    }
    return dp[s.length - 1]
}
console.log(solve("2101"));
