var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
// push方法应该是根据数组的length来根据参数给数组创建一个下标为length的属性，我们可以做以下测试
// obj.push(1)等效于obj[++length-1]=1