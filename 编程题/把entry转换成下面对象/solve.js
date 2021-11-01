var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    },
    f: 213
}

// 要求转换成如下对象
var output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}

// 解决方法:使用递归
function flatObj(entry = {}, parentKey = "", result = {}) {
    for (const key in entry) {
        if (Object.hasOwnProperty.call(entry, key)) {
            let keyName = `${parentKey}${key}`
            if (typeof entry[key] === 'object') {
                flatObj(entry[key], keyName + ".", result)
            }
            else
                result[keyName] = entry[key];

        }
    }
    return result
}
console.log(flatObj(entry));