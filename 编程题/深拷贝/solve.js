//测试对象
let obj = {
    1: {
        23: 34,
        2: {
            2: 34
        }
    },
    23: {
        1: 32
    }
}
//object.assign:对象的浅拷贝
{
    let newobj = Object.assign({}, obj)
    console.log(newobj);
    obj[1][2][2] = 1
    console.log(newobj);
}
//递归函数实现对象深拷贝
{
    function copy(obj) {
        if (typeof obj !== 'object') {
            return obj
        }
        let copyTarget = {};
        for (const item in obj) {
            copyTarget[item] = copy(obj[item])
        }
        return copyTarget
    }
    let testobj = copy(obj)
    console.log(testobj);
    obj[1][2][2] = 2
    console.log(testobj);
}
{
    //遍历二叉树
    let object = {
        1: 2,
        3: 4,
        2: 4,
        "2": 3
    }
    console.log(Object.keys(object), Object.values(object), object);
    let arr = [1, 7, 2, 3, 4, 5]
    let set = new Set(arr)
    console.log([...set].sort((a, b) => a - b));
}
{
    let obj = {
        1: {
            23: 34,
            2: {
                2: 34
            }
        },
        23: {
            1: 32
        }
    }
    const copy = function (obj) {
        let copyObj = {}
        //条件判断
        if (typeof obj != 'object') {
            return obj
        }
        //遍历寻找
        for (const key of Object.keys(obj)) {
            copyObj[key] = copy(obj[key])
        }
        return copyObj
    }
    //测试
    let testobj = copy(obj)
    console.log(testobj, obj);
    obj[1] = 3
    console.log(testobj, obj);

}
