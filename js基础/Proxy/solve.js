//proxy:用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
{
    // handler.get属性读取操作的捕捉器。
    let A = new Proxy({}, {
        get: function (obj, prop) {
            return obj[prop] + 1
        }
    })
    A.one = 1
    console.log(A.one);
}
{
    //set属性写入操作的捕捉器
    let B = new Proxy({}, {
        set: function (obj, prop, value) {
            //预处理
            if (typeof value == 'number') {
                //默认的set操作
                obj[prop] = value
            }
            else {
                throw ("please input number")
                return false
            }
            return true

        }
    })
    B.one = 1
    B.two = '2'
    console.log(B.one, B.two);
}
