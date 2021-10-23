function bubbleSort1(array) {
    //常规冒泡排序
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                array[j + 1] = array[j + 1] ^ array[j]
                array[j] = array[j + 1] ^ array[j]
                array[j + 1] = array[j + 1] ^ array[j]
            }
        }

    }

}
function bubbleSort2(array) {
    //思路 :寻找每一次冒泡排序后最后一次交换的下标,减少排序次数
    let i = array.length - 1;
    while (i > 0) {
        let index = 0
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                index=j
                array[j + 1] = array[j + 1] ^ array[j]
                array[j] = array[j + 1] ^ array[j]
                array[j + 1] = array[j + 1] ^ array[j]
            }
            
        }
        i = index;
    } 
}
let array = [1, 3, 2, 4, 11, 23, 3, 35, 7, 8,"2",'2',[5],(1),{"6":1}]
bubbleSort2(array)
console.log(array);