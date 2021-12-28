/**
 * @param {number[]} nums
 * @return {number}
 */
//使用暴力递归求解
var maxCoins1 = function (nums) {
    let ans = Number.MIN_VALUE;
    backTrack(nums, 0)
    return ans;
    function backTrack(nums = [], score) {
        //边界条件
        let length = nums.length
        if (length <= 0) {
            ans = Math.max(score, ans)
            return
        }
        //循环找值
        for (let index = 0; index < length; index++) {
            //计算coins
            let coins = (index - 1 < 0 ? 1 : nums[index - 1]) * (nums[index]) * (index + 1 >= length ? 1 : nums[index + 1])
            //复制nums
            let copy_nums = [].concat(nums)
            //回调
            nums.splice(index, 1)
            backTrack(nums, coins + score)
            //撤销
            nums = [...copy_nums]

        }
    }
};
console.log(maxCoins1([3, 1, 5, 8]));