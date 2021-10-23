

var a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
var a2 = ['A', 'B', 'C', 'D']
function mergeArray1(a1, a2) {
    //时间复杂度过高不予考虑,估计O(n^3+n)
    //思路先给a2填充3,排序后再去掉3
    a2 = a2.map((item) => item + 3)
    let temp = [...a1, ...a2]
    return temp.sort().map((item) => {
        if (item.includes('3')) {
            return item.slice(0, 1)
        }
        return item
    })

}
function mergeArray2(a1, a2) {
    //时间复杂度过高不予考虑,估计O(n^2)
    //思路双重排序
    // return [...a1, ...a2].sort().sort(function (a, b) {
    //     if (a.charAt(0) == b.charAt(0) && a.length > b.length) {
    //         return -1
    //     }
    // })
    //个人认为最好的解法,大概O(n)
    //思路为一次排序,||:前者为真就不看后者,先根据首字母判断排序,在根据长短把短的排后面,最后根据尾号排序
    //
    return [...a1, ...a2].sort(
        (a, b) => (
            a.codePointAt(0) - b.codePointAt(0) ||
            b.length - a.length ||
            a.codePointAt(1) - b.codePointAt(1)
        )
    )
}
console.log(mergeArray2(a1, a2));