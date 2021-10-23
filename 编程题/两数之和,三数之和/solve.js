let nums = [2, 7, 11, 15], target = 17
const twoSum = function (nums = [], target) {
    //验证数据
    if (!nums || nums.length < 2) {
        return []
    }
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        let k = target - nums[index];
        if (map.has(k)) {
            return [map.get(k), index]
        }
        map.set(nums[index], index)
    }
    return [];
}
console.log(twoSum(nums, target));

const ThreeSum = function (nums = []) {
    //验证数据
    if (!nums || nums.length < 3) {
        return []
    }
    let result = [], hand, last
    //排序
    nums.sort((a, b) => a - b)
    //快慢指针判断结果
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > 0)
            break
        //排重
        if (index > 0 && nums[index] === nums[index - 1]) {
            continue
        }
        //赋值
        hand = index + 1, last = nums.length - 1
        while (hand < last) {
            let sum = nums[index] + nums[hand] + nums[last]
            if (sum == 0) {
                result.push([nums[index], nums[hand], nums[last]])
                //排重
                while (hand < last && nums[hand] === nums[hand + 1]) hand++
                while (hand < last && nums[last] === nums[last - 1]) last--
                hand++,last--
            }
            else if (sum > 0) {
                last--
            }
            else hand++
        }

    }
    return result
}
console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));