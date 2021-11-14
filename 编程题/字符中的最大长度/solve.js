// 给你一个字符串 s ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数：

// 子串中不同字母的数目必须小于等于 maxLetters 。
// 子串的长度必须大于等于 minSize 且小于等于 maxSize

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-number-of-occurrences-of-a-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处
var maxFreq = function (s = '', maxLetters, minSize, maxSize) {
    //找出s的在minSize, maxSize之间的所有子集
    //定义map来收集
    let map = new Map(), max = 0
    for (let i = 0; i <= s.length - minSize; i++) {
        for (let j = i + minSize; j <= Math.min(s.length, i + maxSize); j++) {
            let tempstr = s.slice(i, j)
            //验证条件
            if (tempstr.length < minSize) {
                break
            }
            if ([...new Set(Array.from(tempstr))].length <= maxLetters) {
                if (map.has(tempstr)) {
                    map.set(tempstr, map.get(tempstr) + 1)
                    max = map.get(tempstr) > max ? map.get(tempstr) : max
                }
                else {
                    map.set(tempstr, 1)
                    if (max <= 1) {
                        max = 1
                    }
                }
            }

        }
    }
    return max
    //找出map中最大值即可
    //排除不存在的结果:优化在上一个循环中到最大值
    // if (map.size == 0) return 0
    // return [...map].reduce((previousValue, currentValue) =>
    //     previousValue[1] > currentValue[1] ? previousValue : currentValue
    // )[1]


};

let s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
console.log(Array.from("123").reduce((pre, value) => pre + parseInt(value), 0), s.length);
console.log(maxFreq(s, maxLetters, minSize, maxSize));

//other
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
const maxFreq3 = (s, maxLetters, minSize, maxSize) => {
    const substrMap = new Map();
    let max = 0;
    outer:
    for (let i = 0; i <= s.length - minSize; ++i) {
        const substr = s.substr(i, minSize);
        const letterSet = new Set();
        for (const char of substr) {
            letterSet.add(char);
            if (letterSet.size > maxLetters) continue outer;
        }
        const count = substrMap.has(substr) ? substrMap.get(substr) + 1 : 1;
        substrMap.set(substr, count);
        count > max && (max = count);
    }
    return max;
};