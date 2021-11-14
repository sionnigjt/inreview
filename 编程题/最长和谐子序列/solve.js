//titel:https://leetcode-cn.com/problems/longest-harmonious-subsequence/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
//输入：nums = [1,3,2,2,5,2,3,7]
// 输出：5
// 解释：最长的和谐子序列是[3, 2, 2, 2, 3]
function findLHS(nums) {
    //使用map对象遍历nums
    let map = new Map()
    for (const item of nums) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        }
        else {
            map.set(item, 1)
        }
    }
    let max = 0
    //寻找map中每个元素+1的中最大的值
    for (const key of map.keys()) {
        if (map.has(key + 1)) {
            max = Math.max(map.get(key) + map.get(key + 1), max)
        }
    }
    return max
}
nums = [1, 3, 2, 2, 5, 2, 3, 7]
console.log(findLHS(nums));
let map = new Map()
for (const item of nums) {
    if (map.has(item)) {
        map.set(item, map.get(item) + 1)
    }
    else {
        map.set(item, 1)
    }
}

