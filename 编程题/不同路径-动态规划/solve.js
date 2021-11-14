var uniquePaths = function (m, n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }
    let dp = new Array(m);
    for (let index = 0; index < dp.length; index++) {
        dp[index] = new Array(n)
    }
    //初始化
    for (let index = 0; index < n; index++) {
        dp[0][index] = 1
    }
    for (let index = 1; index < m; index++) {
        dp[index][0] = 1
    }
    //推导式:dp[m][n]=dp[m-1][n]+dp[m][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
console.log(uniquePaths(7, 3));
