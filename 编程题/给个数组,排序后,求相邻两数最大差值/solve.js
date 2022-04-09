function get_max_difference(arr = []) {
    let max = Math.max(...arr), min = Math.min(...arr)
    if (max == min) return 0;
    let len = arr.length, maxes = [len + 1], mins = [len + 1], hash_bucket = new Array(len + 1).fill(false)
    //循环把数值填入桶中
    for (const key of arr) {
        let index = bucket(key, len, max, min)
        maxes[index] = hash_bucket[index] ? Math.max(key, maxes[index]) : key
        mins[index] = hash_bucket[index] ? Math.min(key, mins[index]) : key
        hash_bucket[index] = true
    }
    //从非空桶找到相邻值之差
    let start_value = mins[0], ans = -1
    for (let index = 1; index < arr.length + 1; index++) {
        if (hash_bucket[index]) {
            ans = Math.max(start_value, maxes[index])
            start_value = mins[index]
        }


    }
    return ans;
    function bucket(number, len, max, min) {
        return Math.floor((number - min) * len / (max - min))
    }


}
console.log(get_max_difference([0, 1, 88, 11]));