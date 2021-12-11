//递归:暴力求解+剪枝
let nums = [0, 1, 0, 3, 2, 3]

function sovle(nums = []) {
    //定义变量
    let len = nums.length
    let map = Array.from({ length: len });
    //定义递归函数
    const dp = function (nums = [], preindex = 0) {
        //剪枝
        if (map[preindex] != undefined) {
            return map[preindex]
        }
        //边界条件
        if (preindex >= len) {
            return 1
        }
        let max = 1
        for (let index = preindex + 1; index < len; index++) {
            if (nums[index] > nums[preindex]) {
                //加1代表目前总长度
                max = Math.max(dp(nums, index) + 1, max)
            }
        }
        map[preindex] = max
        return max
    }
    return nums.reduce((pre, _value, index) => {
        pre = Math.max(dp(nums, index), pre)
        return pre
    }, 1)
}

//迭代法
function solve2(nums = []) {
    let len = nums.length
    let ans = Array.from({ length: len }).fill(1)
    //迭代:从尾部开始计算
    //外层计算:
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] < nums[j]) {
                ans[i] = Math.max(ans[j] + 1, ans[i])
            }
        }
    }
    return Math.max(...ans)
}

//快慢指针
function sovle3(nums = []) {
    let len = nums.length
    //定义快慢指针
    let fast = 0, ans = 1
    for (const slow in nums) {
        //改变变量
        let current = nums[slow], count = 1
        //非连续没法跨域选值
        fast = Number(slow) + 1
        while (fast < len) {
            //满足递增
            if (current < nums[fast]) {
                current = nums[fast]
                count++
            }
            fast++
        }
        ans = Math.max(ans, count)
    }
    return ans
}
function test_time(func) {
    let start = Date.now()
    // func.apply(this, arguments)
    // console.log(arguments, func);
    console.time()
    console.log(func(arguments[1]));
    let last = Date.now()
    console.timeEnd()

}

test_time(sovle, nums)
test_time(solve2, nums)
test_time(sovle3, nums)
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
    var n = nums.length;
    var dp = [nums[0]];

    for (let i = 1; i < n; i++) {
        if (nums[i] > dp[dp.length - 1])
            dp.push(nums[i]);
        else {
            var left = 0, right = dp.length - 1;
            while (left < right) {
                var mid = Math.floor((left + right) / 2);
                if (dp[mid] >= nums[i])
                    right = mid;
                else
                    left = mid + 1;
            }
            dp[left] = nums[i];
        }
    }

    return dp.length;
};