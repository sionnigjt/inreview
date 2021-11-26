function suffix(str = "") {
    //先转后缀表达式计算
    //形如:2+3*2=> 232*+
    // 如果遇到左括号则直接入栈
    // 如果遇到右括号,则弹出站内只到出现左括号为止
    // 如果站外操作符的优先级高于站内的优先级则入栈
    // 如果栈外的操作符优先级低于或等于栈内的优先级，输出栈内的符号，并入栈栈外的符号
    // 中缀表达式遍历完成，但是栈中还有符号存在，一一出栈输出
    let map = {//优先级
        '(': -99,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 3,
        '^': 4,
        '.': 5,
        'sin': 6,
        ')': 99
    }, mapExist = ['(', '+', '-', '*', '/', '^', '.', ')', 'sin'];
    //解决小数点前没得数字
    let ansStack = [], tmpStack = [], copyAry = [], strArry = solveSpotZero(str.replaceAll(/\s/g, '')).split(/\b/);
    // 解决初始负数的问题
    if (strArry[0] == '-') {
        strArry.shift()
        strArry[0] = "-" + strArry[0]
    }
    // console.log(strArry);
    // 解决-(+(问题
    for (const key of strArry) {
        if (!/\d+/.test(key)) {
            if (key.length == 1) {
                copyAry.push(key)
                continue
            }
            else {
                for (const iterator of key.split('')) {
                    // console.log(iterator);
                    copyAry.push(iterator)
                }
            }
        }
        else copyAry.push(key)
    }
    strArry = copyAry
    // 判断数字
    // console.log("查看", strArry);
    let number = ""
    for (const key of strArry) {
        //不是数字
        if (mapExist.includes(key)) {
            ansStack.push(number)
            number = ""
            //用函数判断这个字符是否push
            operaSymbol(key, tmpStack, ansStack)
        }
        else {
            number += key
        }
    }
    ansStack.push(number)
    //判断剩余的参数
    while (tmpStack.length >= 1) {
        ansStack.push(tmpStack.pop())
    }
    return ansStack.filter((value) => {
        if (value != '') {
            return value
        }
    })
    function operaSymbol(char = '', tmpArry = [], ansArry = []) {
        let laststr = tmpArry[tmpArry.length - 1]
        //判断1:tmpArry为空
        if (!laststr) {
            tmpArry.push(char)
            return
        }
        //判断括号
        if (char == '(') {
            tmpArry.push(char)
        }
        else if (char == ')') {
            let CurChar = tmpArry.pop()
            while (tmpArry && CurChar != '(') {
                ansArry.push(CurChar)
                CurChar = tmpArry.pop()
            }
        }
        //判断优先级
        else if (map[char] > map[laststr]) {
            tmpArry.push(char)
        }
        else if (map[char] <= map[laststr]) {
            while (laststr && map[char] <= map[laststr]) {
                ansArry.push(tmpArry.pop())
                laststr = tmpArry[tmpArry.length - 1]
            }
            tmpArry.push(char)
        }
        //其他情况:一般用不到
        else {
            tmpArry.push(char)
        }
    }
    function solveSpotZero(tmp = '') {
        //使用正则
        let tmp1 = tmp.split('')
        let count = 0
        for (const key of tmp.matchAll(/.(?=\.)/g)) {
            if (typeof Number(key[0]) == 'NaN') {
                // console.log(key.index, key[0]);
                tmp1.splice(key.index + 1 + count++, -1, "0")
            }

        }
        return tmp1.join('')
        //使用双指针

    }

}
function solve(str = []) {
    let stack = []
    for (const key of str) {
        if (key == '+') {
            stack.push(Number(stack.pop()) + Number(stack.pop()))
        }
        else if (key == '-') {
            stack.push(Number(stack.pop()) - Number(stack.pop()))
        }
        else if (key == '*') {
            stack.push(Number(stack.pop()) * Number(stack.pop()))
        }
        else if (key == '/') {
            stack.push(1 / Number(stack.pop()) * Number(stack.pop()))
        }
        else if (key == '^') {
            //由于顺序改变
            let index = stack.pop()
            let base = stack.pop()
            stack.push(Math.pow(base, index))
        }
        else if (key == '.') {
            let index = stack.pop()
            let base = stack.pop()
            console.log(index, base, Number(base + '.' + index));
            stack.push(Number(base + '.' + index))
        }
        else if (key == 'sin') {
            stack.push(Math.sin(stack.pop()))
        }
        else {
            stack.push(key)

        }
    }
    //判断是否有小数
    let _length = stack[0].toString().split('.')[1] ? stack[0].toString().split('.')[1].length : 0
    return _length > 4 ? _length < 8 ? stack[0].toFixed(_length) : stack[0].toFixed(8).replace(/(0)+$/, '') : stack[0]

}
var test1 = '(1)sin +123+32*(23+12*23)'
// console.log(test1)
console.log(suffix(test1));
console.log(solve(suffix(test1)));
// console.log(Number(test1).toFixed(6));


