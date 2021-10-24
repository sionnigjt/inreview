function flatdeep(arr) {
    return Array.isArray(arr)?arr.reduce((acc,value)=>[...acc,...flatdeep(value)],[]):[arr]
}
let arr = [1, 3, 45, 56, [1, 23, [1, [414], 412, 4, [14, 4, 114], 23, 4, 4]]]
console.log(flatdeep(arr));
function flat(arr, depth = 1) {
    return depth > 0 ? 
        arr.reduce((acc,value) => {
            if (Array.isArray(value))
                return [...acc, ...flat(value, depth - 1)]
            return [...acc,value]
    },[])
    :[arr]
}
console.log(flat(arr,2));