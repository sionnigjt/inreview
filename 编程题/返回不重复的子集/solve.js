//输入[1,2,2]
//返回:[[],[1],[2],[1,2],[2,2],[1,2,2]]
const sovle = function (list) {
    //定义返回值
    let arrys = list.sort((a, b) => a - b)
    let answer_list = []
    function callback(arry = [], start) {
        //边界条件:无
        answer_list.push([...arry])
        //循环寻找
        for (let index = start; index < arrys.length; index++) {
            //判断条件:回溯时若相邻数字相等则跳过
            //start < index:回溯时 arrys[index] == arrys[index - 1]:判断相邻相等与否
            if (start < index && arrys[index] == arrys[index - 1]) {
                continue
            }
            arry.push(arrys[index])
            callback(arry, index + 1)
            arry.pop()
        }
    }
    callback([], 0)
    return answer_list

}
console.log(sovle([2, 1, 1]));
