/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    return people.reduce((pre, value, index) => {
        if (pre[0] <= limit || pre[0] + value > limit) {
            pre[1]++
            return [value, pre[1]]
        }
        else return [value + pre[0], pre[1]]
    }, [0, 0])[1]


};
let people = [3, 2, 3, 2], limit = 3
console.log(numRescueBoats(people, limit));