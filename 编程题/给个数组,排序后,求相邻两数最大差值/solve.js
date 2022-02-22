function get_max_differnce(arr = []) {
    let max = Math.max(...arr), min = Math.min(...arr)
    if (max == min) return 0;
    let len = arr.length, maxs = [len + 1], mins = [len + 1], hasbucket = new Array(len + 1).fill(false)
    //循环把数值填入桶中
    for (const key of arr) {
        let index = bocket(key, len, max, min)
        maxs[index] = hasbucket[index] ? Math.max(key, maxs[index]) : key
        mins[index] = hasbucket[index] ? Math.min(key, mins[index]) : key
        hasbucket[index] = true
    }
    //从非空桶找到相邻值之差
    let start_value = mins[0], ans=-1
    for (let index = 1; index < arr.length+1; index++) {
        if (hasbucket[index]) {
            ans = Math.max(start_value, maxs[index])
            start_value = mins[index]
        }


    }
    return ans;
    function bocket(number, len, max, min) {
        return Math.floor((number - min) * len / (max - min))
    }


}
console.log(get_max_differnce([0, 1, 88, 11]));