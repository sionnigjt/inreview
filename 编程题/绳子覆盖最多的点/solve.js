arr = [1, 3, 4, 6, 7, 8, 9, 111, 123, 14, 5]
len = 5
//it is my sovle
function find_max_dots(arr, len) {
    let max = 0, length = arr.length
    for (let i = 0; i < length; i++) {
        while (arr[i] + len >= arr[i + max]) {
            max++
        }
    }
    return max

}
//double point
function find_max_dots2(arr, len) {
    let left = 0, right = 0, n = arr.length, max = 0
    while (left < n) {
        while (arr[right] <= arr[left] + len) {
            right++
        }
        left++
        max = Math.max(max, right - left + 1)
    }
    return max
}
function run_time(func, ...arg) {
    console.time();
    func.apply(null, arg)
    console.timeEnd()
}
run_time(find_max_dots, arr, len);
run_time(find_max_dots2, arr, len)