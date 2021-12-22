/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//超出时间限制
var maxSlidingWindow = function (nums = [], k) {
    let tmp = nums.slice(0, k), maxindex = find_index_MaxArr(tmp), dp = []
    let ans = [nums[maxindex]]
    for (let index = k; index < nums.length; index++) {
        tmp.shift(), tmp.push(nums[index]), maxindex--
        if (nums[index] > tmp[maxindex]) {
            maxindex = k - 1
        }
        if (maxindex < 0) {
            maxindex = find_index_MaxArr(tmp)
            ans.push(tmp[maxindex % k])
        }
        else ans.push(tmp[maxindex])
    }
    return ans

    function find_index_MaxArr(nums = []) {
        return nums.reduce((pre, value, index) => {
            if (pre.value < value) {
                pre.value = value
                pre.index = index
            }
            return pre
        }, { value: -Number.MAX_VALUE, index: -1 }).index
    }
};

function maxSlidingWindow1(nums, k) {
    const que = [], ans = []
    for (let i = 0; i < nums.length; i++) {
        //清理失效元素
        while (que[0] < i - k + 1) {
            que.shift()
        }
        //清理比当前元素小的的所有元素
        while (nums[que[que.length - 1]] < nums[i]) {
            que.pop()
        }
        que.push(i)
        if (i >= k - 1) {
            ans.push(nums[que[0]])
        }
    }
    return ans
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow3 = function (nums, k) {
    let queue = new Array(nums.length);
    let hh = 0, tt = -1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (hh <= tt && queue[hh] < i - k + 1) hh++;
        while (hh <= tt && nums[queue[tt]] < nums[i]) tt--;
        queue[++tt] = i;
        if (i >= k - 1) result.push(nums[queue[hh]]);
    }
    return result
};
console.time();
console.log(maxSlidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.timeLog();
