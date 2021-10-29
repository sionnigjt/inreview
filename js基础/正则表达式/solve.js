//正则是匹配模式,要么匹配字符,要么匹配位置

//匹配位置的 ^ $ \b \B ?=p (?!p) (?<p) (?<!p)
{
    //使用^ $
    console.log("test hi".replace(/^/, 's'))
    console.log("test hi".replace(/$/, 's'));
    //可以携带其他字符一起使用
    console.log("test hi".replace(/^test/, 'notest'))
};
{
    //使用\b,\B:匹配单词边界
    console.log("test renderToString".replace(/\b/g, '?'));
    console.log("test renderToString".replace(/\B/g, '?'));
    // g的作用:全模式匹配,否则只匹配到截止符
}
{
    //使用 (?=p):匹配字符p的前一个字符
    console.log("test pstring".replace(/(?=string)/g, '?'));
    //使用(?!=p):匹配除字符p的前一个字符的所有字符
    console.log("test pstring".replace(/(?!=string)/g, '?'));
    //使用(?<=p):匹配字符p的后一个字符
    console.log("test pstring".replace(/(?<=string)/g, '?'));
    //使用(?<!p):除匹配字符p的后一个字符的所有字符
    console.log("test pstring".replace(/(?<!string)/g, '?'));
}
{
    //实践一下:解决数字格式化问题
    let price = '123434'
    //匹配尾字符前三个数字的前一个字符
    console.log(price.replace(/(?=\d{3}$)/g, ','));
    //匹配尾字符前每个三个数字一组的前一个字符
    console.log(price.replace(/(?=(\d{3})+$)/g, ','));
    //匹配除首字符的所有字符中的上个条件
    console.log(price.replace(/(?!^)(?=(\d{3})+$)/g, ','));
    //解析 \d{3})+匹配多个,加上$就是从尾开始匹配
}