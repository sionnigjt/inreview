let arr = [
    { id: 1, data: 'data0', pid: 0 },
    { id: 2, data: 'data1', pid: 1 },
    { id: 3, data: 'data2', pid: 1 },
    { id: 4, data: 'data3', pid: 3 },
    { id: 5, data: 'data4', pid: 4 },
]
//使用递归
function Array_to_Tree(arr) {
    let ans = [];
    getChilren(arr, ans, 0)
    return ans
    function getChilren(arr = [], ans = [], id = 0) {
        for (const item of arr) {
            if (item.pid == id) {
                const mewItem = { ...item, children: [] }
                ans.push(mewItem)
                getChilren(arr, mewItem.children, item.id)
            }
        }
    }
}


//一次循环搞定
function Array_to_Tree2(arr = []) {
    let ans = [], map = {}
    for (const item of arr) {
        const id = item.id
        const pid = item.pid
        //把item加入map中
        map[id] = {
            ...item,
            children: []
        }
        //通过pid寻找tree结构
        //保存根节点
        if (pid == 0) {
            ans.push(map[id])
        }
        else {
            //如果有父节点
            if (map[pid]) {
                map[pid].children.push(map[id])
            }
        }


    }
    return ans
}
function run_time(func, ...arg) {
    console.time();
    console.log(func.apply(null, arg));
    console.timeEnd()
}
run_time(Array_to_Tree, arr)
run_time(Array_to_Tree2, arr)