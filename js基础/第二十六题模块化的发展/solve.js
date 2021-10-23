//模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。
// Commonjs:同步加载
// /特点: require、module.exports、exports CommonJS 一般用在服务端或者Node用来同步加载模块
// ，它对于模块的依赖发生在代码运行阶段，不适合在浏览器端做异步加载。
// exports实际上是一个对module.exports的引用:

// ES6 Module:同步加载
// 特点: import、export ES6模块化不是对象，import会在JavaScript引擎静态分析，在编译时就引入模块代码
// ，而并非在代码运行时加载，因此也不适合异步加载。 在HTML中如果要引入模块需要使用

//二者差异:commonjs是拷贝,es6是动态加载