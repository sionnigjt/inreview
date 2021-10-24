let num1 = [1, 2, 7, 45, 0, 0], m = 4
let num2 = [2, 5, 6, 24, 423, , 534, 5423,], n = 4
//输出[1,2,2,3,5,6]

function solve1(num = [], m, mun2 = [], n) {
    //不考虑性能,较为简洁的实现,时间复杂度高
    return num1.splice(0, m).concat(num2.splice(0, n)).sort((a, b) => a - b)
}
function solve2(num = [], m, num2 = [], n) {
    //单次for循环,(O(n+m))
    let len1 = m - 1, len2 = n - 1;
    for (let index = n + m - 1; index > 0; index--) {
        if (len1 < 0) {
            num1[index] = num2[len2--]
        }
        else if (len2 < 0) {
            num1[index] = num1[len1--]
        }
        else num1[index] = num1[len1] > num2[len2] ? num1[len1--] : num2[len2--]
    }
    return num
}
function solve3(num = [], m, num2 = [], n) {
    //利用while循环判断,(O(n+m))
    let len1 = m - 1, len2 = n - 1, len = n + m - 1;
    while (len1 >= 0) {
        if (len2 < 0) {
            num[len--] = len1--
        }
        else num[len--] = num1[len1] > num2[len2] ? num1[len1--] : num2[len2--]
    }
    return num
}
// console.log(solve1(num1, m, num2, n));
function addToList(item, list) {
    return list.push(item);
}
const result = addToList('apple', ['banana']);
console.log(result);

