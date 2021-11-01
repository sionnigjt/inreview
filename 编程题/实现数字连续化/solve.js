//题目:输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
let nums = [1, 2, 3, 5, 7, 8, 10]
function simplifyNumber(nums = []) {
    //验证nums是否是数组
    if (nums.length <= 0) {
        return new Error("数组不存在")
    }
    if (nums.length == 1) {
        return nums
    }
    let result = []
    let tempvalue = nums[0]
    for (let index = 1; index <= nums.length; index++) {
        //末尾时nums[length]越界了,由于时underdinfed不影响
        if (nums[index - 1] + 1 != nums[index]) {
            if (tempvalue != nums[index - 1]) {
                result.push(`${tempvalue}~${nums[index - 1]}`)
            }
            else {
                result.push(nums[index - 1])
            }
            tempvalue = nums[index]
        }

    }
    return result
}
let simplifyNumber2 = function (nums = []) {
    let i = 0, j = 1, len = nums.length
    let result = []
    //使用快慢指针
    while (i < len) {
        //让j判断到连续数字的边界
        while (nums[j - 1] + 1 == nums[j] && j < len) {
            j++
        }
        //判断i,j是否指向不同位置
        result.push(j - 1 === i ? nums[i] : `${nums[i]}~${nums[j - 1]}`)
        i = j
        j++
    }
    return result
}
console.log(simplifyNumber2(nums));