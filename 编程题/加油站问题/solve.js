const canCompleteCircuit = function (gas = [], cost = []) {
    //遍历gas得到能发车的起始点
    let map = gas.reduce((pre, value, index) => {
        if (cost[index] <= value && cost[index] >= 0) {
            pre.push(index)
        }
        return pre
    }, [])
    //通过不同起始点判断哪些可以
    for (let i = 0; i < map.length; i++) {
        //遍历寻找
        let indexvalue = map[i]
        let costvalue = gas[indexvalue] - cost[indexvalue]
        let length = gas.length
        let flag = true
        for (let index = 1; index < gas.length; index++) {
            costvalue += gas[(indexvalue + index) % length] - cost[(indexvalue + index) % length]
            if (costvalue < 0) {
                flag = false
                break
            }
        }
        if (flag) {
            return indexvalue
        }
    }
    return -1


}
const canCompleteCircuit2 = function (gas, cost) {
    let n = gas.length;
    // 相当于图像中的坐标点和最低点
    let sum = 0,
        // 达到最低点 start就是对应的结果
        minSum = Number.MAX_VALUE;
    let start = 0;
    for (let i = 0; i < n; i++) {
        sum += gas[i] - cost[i];
        if (sum < minSum) {
            // 经过第 i 个站点后，使 sum 到达新低
            // 所以站点 i + 1 就是最低点（起点）
            start = i + 1;
            minSum = sum;
        }
    }
    // 总油量小于总的消耗，无解
    if (sum < 0) {
        return -1;
    }
    // 环形数组特性
    return start == n ? 0 : start;
}
gas = [2, 3, 4]
cost = [3, 4, 3]

console.log(canCompleteCircuit2(gas, cost));