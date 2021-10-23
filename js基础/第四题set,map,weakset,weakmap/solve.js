//set对象:值为唯一值
//去重
console.log(...new Set([2, 1, 3, 3, 2, 4, '4']))//4和'4'是不同的,要强相等才可以
let set = new Set();
//set的三大基本操作
console.log(set.add(1).add(2).add("4").delete(2), set.has(2));
console.log(set);
//转换数组,Array.from或者[...set]
//遍历
// keys()：返回一个包含集合中所有键的迭代器
// values()：返回一个包含集合中所有值得迭代器
// entries()：返回一个包含Set对象中所有元素得键值对迭代器
for (let item of set.keys()) {
    console.log(item);
}
for (let item of set.entries()) {
    console.log(item);
}
for (let item of set.values()) {
    console.log(item);
}

// WeakSet 对象允许你将弱引用对象储存在一个集合中
//类似于set只是引用的对象是弱应用的,不会被垃圾回收机制回收
//用法上同set