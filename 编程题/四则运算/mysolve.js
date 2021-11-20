function houzhui(str = "") {
    //先转后缀表达式计算
    //形如:2+3*2=> 232*+
    // 如果遇到左括号则直接入栈
    // 如果遇到右括号,则弹出站内只到出现左括号为止
    // 如果站外操作符的优先级高于站内的优先级则入栈
    // 如果栈外的操作符优先级低于或等于栈内的优先级，输出栈内的符号，并入栈栈外的符号
    // 中缀表达式遍历完成，但是栈中还有符号存在，一一出栈输出
    let map = {//优先级
        '(': 1,
        '+': 2,
        '-': 2,
        '*': 3,
        '/': 3,
        ')': 4
    }, mapExist = ['(', '+', '-', '*', '/', ')'];
    let ansArry = [], tmpArry = [], strArry = str.split('');
    //判断数字
    let number = ''
    for (const key of strArry) {
        //不是数字
        if (mapExist.includes(key)) {
            ansArry.push(number)
            number = ''
            //用函数判断这个字符是否push
            operaSymbol(key, tmpArry, ansArry)
        }
        else {
            number += key
        }
    }
    ansArry.push(number)
    //判断剩余的参数
    while (tmpArry.length >= 1) {
        ansArry.push(tmpArry.pop())
    }

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
        //其他情况:
        else {
            tmpArry.push(char)
        }
    }
    return ansArry.join('').split('')
}
function solve(str = []) {
    let stack = []
    for (const key of str) {
        if (key == '+') {
            stack.push(stack.pop() + stack.pop())
        }
        else if (key == '-') {
            stack.push(stack.pop() - stack.pop())
        }
        else if (key == '*') {
            stack.push(stack.pop() * stack.pop())
        }
        else if (key == '/') {
            stack.push(1 / stack.pop() * stack.pop())
        }
        else {
            stack.push(Number(key))
        }
    }
    return stack[0]
}
var test1 = '1+(2*3+4)+5'
console.log(test1)
console.log(houzhui(test1));
console.log(solve(houzhui(test1)));