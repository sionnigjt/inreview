const isValid = function (s) {
    let map = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    let stack = []
    s = s.split('')
    for (let index = 0; index < s.length; index++) {
        if (map[s[index]]) {
            stack.push(s[index])
        }
        else if (s[index] !== map[stack.pop()]) {
            return false
        }
    }
    return true
}
console.log(isValid("([][()]])"));