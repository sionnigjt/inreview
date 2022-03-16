let arr = [1, 1, '1', 2, 2, '2']
//es5以前
{
    const unique = (arr = []) => {
        const map = new Map()
        return arr.filter((value) => !map.has(value) && map.set(value, true))
    }
    console.log(unique(arr));
}
//es6
{
    const unique = (arr = []) => {
        return [...new Set(...[arr])]
    }
    console.log(unique(arr));
}