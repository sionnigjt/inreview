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
//JSON的深拷贝
{
    const copy = (obj) => {
        return JSON.parse(JSON.stringify(obj))
    }

}

//简单深拷贝
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
        let copyObj = obj instanceof Array === 'object' ? [] : {}
        //条件判断
        if (typeof obj != 'object') {
            return obj
        }
        //遍历寻找
        for (const key in obj) {
            copyObj[key] = copy(obj[key])
        }
        return copyObj
    }
    //测试
    let testobj = copy(obj)
    obj[1] = 3
    console.log("object测试", testobj, obj);

}
//高级深拷贝:考虑数组,date,正则,循环引用
{
    function Typeof(arg) {
        return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
    }
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
    const deepclone = (target, map = new WeakMap()) => {
        //循环引用验证
        if (map.get(target)) {
            return target
        }
        //获取构造函数
        let constructor = target.constructor;
        //只考虑object和array的深拷贝,其他直接返回
        if (Typeof(target) !== 'object' && Typeof(target) !== 'array') {
            if (Typeof(target) === 'date') {
                return new constructor(target)
            }
            return target
        }
        else {
            //设置循环引用标识符
            map.set(target, true)
            const copyTarget = Typeof(target) === 'array' ? [] : {}
            for (const key in target) {
                copyTarget[key] = deepclone(target[key], map)
            }
            return copyTarget
        }
    }
    let testobj = deepclone(obj)
    obj[1] = 3
    console.log("object测试", testobj, obj);
    let arr = [[1, 2], [3, 4]]
    let copyarr = deepclone(arr)
    arr[0] = 1
    console.log("array测试", copyarr, arr);
    let date =new Date()
    let copydate = deepclone(date)
    console.log(copydate,date);
}