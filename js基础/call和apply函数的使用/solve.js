function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    let temp = Product.call(this, ...arguments);//执行  this.name = name;this.price = price;导致food多了属性
    console.log(temp)//没有返回值
    this.category = 'food';
}
function Food2(name, price) {
    let temp = Product.apply(this, [...arguments]);//执行  this.name = name;this.price = price;导致food多了属性
    console.log(temp)//没有返回值
    this.category = 'food';
}
console.log(new Food2('cheese', 5));

//call和apply的区别在于参数类型上