let obj = { name: "admin", email: "xxx.gmail.com", pwd: '123' }
//直接删除 email字段
{
    delete obj.email
    Reflect.deleteProperty(obj, "email")
}

console.log(obj);
//解构:推荐使用                         
{
    //普通解构:适用于剩余值少的情况
    let { name, pwd } = obj
    let newobj = { name, pwd }
    console.log(newobj);
    //切断引用:适用于剩余值多的情况
    let { email, ...remaider } = obj
    console.log(remaider);
}