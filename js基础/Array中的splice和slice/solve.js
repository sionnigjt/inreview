//splice
{

    //参数: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    //参数作用:start:如果超出了数组的长度，则从数组末尾开始添加内容 deleteCount:删除个数(可为负数变成添加个数)(个数:array.length-start)
    //返回值更改值组成的数组
    //原始数组将会改变

    //删除一个添加一个
    {
        let array = ["Jan", "Feb", "March", "April", "June", "Sious"]
        console.log(array.splice(4, 1, 'hiJune'));
        console.log(array);
    }

    //删除一个
    {
        let array = ["Jan", "Feb", "March", "April", "June", "Sious"]
        console.log(array.splice(4, 1));
        console.log(array);
    }
    //添加一个
    {
        let array = ["Jan", "Feb", "March", "April", "June", "Sious"]
        console.log(array.splice(4, -1, 'hiadd'));
        console.log(array);
    }
}
//slice
{
    //参数:arr.slice([begin[, end]]),end不写默认到结尾
    //返回值更改后的数组
    //原有数组不会改变
    let array = ["Jan", "Feb", "March", "April", "June", "Sious"]
    console.log(array.slice(1, 2));
    console.log(array);

}
//区别
{
    //slice不改变原有数组
    //splice能实现原有数组的增删,返回值能实习部分slice的功能
    //splice的功能更加强大

}