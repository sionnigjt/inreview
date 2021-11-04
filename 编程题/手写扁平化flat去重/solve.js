//title:手写flat,flat:会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
function flatdeep(arr) {
    return Array.isArray(arr) ? arr.reduce((acc, value) => [...acc, ...flatdeep(value)], []) : [arr]
}
let arr = [1, 3, 45, 56, [1, 23, [1, [414], 412, 4, [14, 4, 114], 23, 4, 4]]]
console.log(flatdeep(arr));
//利用递归判断,方便寻找截止点
function flat(arr, depth = 1) {
    return depth > 0 ?
        arr.reduce((acc, value) => {
            if (Array.isArray(value))
                return [...acc, ...flat(value, depth - 1)]
            return [...acc, value]
        }, [])
        : [arr]
}
console.log(flat(arr, 2));