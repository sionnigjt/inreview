//递归求解:回溯算法
var permute = function (nums) {
    let ans = [], tempList = []
    function backtrack(nums) {
        //结束条件,把结果输入list
        if (tempList.length == nums.length) {
            return ans.push([...tempList])
        }
        //循环递归
        for (let index = 0; index < nums.length; index++) {
            //防止重复
            if (tempList.includes(nums[index])) continue
            tempList.push(nums[index])
            backtrack(nums)
            tempList.pop()
        }
    }
    backtrack(nums)
    return ans
}
console.log(permute([1, 2, 3, 4]));
