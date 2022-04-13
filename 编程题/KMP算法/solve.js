//kmp匹配表
function kmpMatch(str = '') {
    let strArray = str.split("");
    let answerArray = new Array(strArray.length);
    for (let index = 0; index < strArray.length; index++) {
        //去除index=0的情况
        if (index == 0) {
            answerArray[0] = 0
        }
        //寻找在index之前的匹配项
        else {
            //寻找的长度
            let length = 0
            //从零开始寻找
            for (let j = 0; j < index; j++) {
                //0-j和j-index为前缀和后缀
                if (compareTwo(strArray, j, index)) {
                    length = j + 1
                }
            }
            answerArray[index] = length;
        }
    }
    function compareTwo(arr = [], j, k) {
        for (let index = 0; index <= j; index++) {
            //前缀与后缀逐项比对
            if (arr[index] != arr[k - j + index]) {
                return false
            }
        }
        return true
    }
    return answerArray;
}
//具体实现
function kmp(target = '', cmp = '') {
    let kmp_match = kmpMatch(cmp);
    let i = 0, j;
    //外围判断字符是否比对完成
    while (i < target.length) {
        //按匹配表匹配字符i
        for (j = 0; j < cmp.length; j++) {
            if (target.charAt(i + j) != cmp.charAt(j)) {
                j = kmp_match[j]
                break
            }
        }
        //匹配完成
        if (j == cmp.length) {
            return i;
        }
        //跳过匹配过的字符:防止空字符导致的死循环
        i += j < 1 ? 1 : j;

    }
    return 0
}

console.log(kmp("ababcabca", 'bca'));
