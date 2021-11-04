/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/boats-to-save-people
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var numRescueBoats = function (people, limit) {
    let ans = 0;
    people.sort((a, b) => a - b);
    let light = 0, heavy = people.length - 1;
    while (light <= heavy) {
        if (people[light] + people[heavy] <= limit) {
            ++light;
        }
        --heavy;
        ++ans;
    }
    return ans;
}
let people = [3, 1, 3, 2], limit = 3
console.log(numRescueBoats(people, limit));