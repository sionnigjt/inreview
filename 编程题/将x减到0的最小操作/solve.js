/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let len = nums.length
    function dp(l, r, x) {
        //判断符合结果的值
        if (x == 0) {
            return 0
        }
        //边界状态,排除
        if (x < 0 || l > len - 1 || r < 0) {
            return len + 1
        }
        //状态转移,l:左边,r:右边,x:当前值
        return 1 + Math.min(dp(l + 1, r, x - nums[l]), dp(l, r - 1, x - nums[r]))
    }
    let ans = dp(0, len - 1, x)
    //排除边界状态,返回有效值
    return ans > len ? -1 : ans

};
let testnums = [1241, 8769, 9151, 3211, 2314, 8007, 3713, 5835, 2176, 8227, 5251, 9229, 904, 1899, 5513, 7878, 8663, 3804, 2685, 3501, 1204, 9742, 2578, 8849, 1120, 4687, 5902, 9929, 6769, 8171, 5150, 1343, 9619, 3973, 3273, 6427, 47, 8701, 2741, 7402, 1412, 2223, 8152, 805, 6726, 9128, 2794, 7137, 6725, 4279, 7200, 5582, 9583, 7443, 6573, 7221, 1423, 4859, 2608, 3772, 7437, 2581, 975, 3893, 9172, 3, 3113, 2978, 9300, 6029, 4958, 229, 4630, 653, 1421, 5512, 5392, 7287, 8643, 4495, 2640, 8047, 7268, 3878, 6010, 8070, 7560, 8931, 76, 6502, 5952, 4871, 5986, 4935, 3015, 8263, 7497, 8153, 384, 1136]

// console.log(minOperations(testnums, 894887480));
function sovle(nums = [], x) {
    //利用滑动窗口
    //计算剩余值
    let remainder = nums.reduce((sum, value) => sum + value) - x
    if (remainder == 0) {
        return nums.length
    }
    else if (remainder < 0) {
        return -1
    }
    //j:快指针,i:慢指针
    let i = 0, total = 0, ans = nums.length;
    for (const j in nums) {
        total += nums[j];
        //慢指针移动,寻找边界条件
        while (i < j && remainder < total) {
            total -= nums[i]
            i++
        }
        //满足条件时找出最小值
        if (total == remainder) {
            ans = Math.min(ans, nums.length - (j - i + 1))
        }

    }
    return ans == nums.length ? -1 : ans
}
console.log(sovle([1, 2,6, 3], 3));