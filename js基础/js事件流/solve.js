//js事件被触发:捕捉,目标,冒泡
{
    //捕捉:window对象→document→HTML→body→...→target的直接父元素\
    //目标:target
    //冒泡:target→...→body→HTML→document→window
    //注意:事件的传播路径在事件开始传播之前就已经确定，如果在传播过程中DOM结构发生变化，那么也会按照根据原来的结构而生成的传播路径进行传播
}
//EventTarget.addEventListener():添加监听事件
{
    //参数:EventTarget.addEventListener(type, listener, options |useCapture)
    //options(boolen):1.capture:传到对象时触发listerner,2.once:运行一次3.passive(默认false):为true时 listener 永远不会调用 preventDefault()
    //useCapture(默认:false):true:监听捕获事件,false:监听冒泡事件
    //注意: 对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时useCapture 参数值是true还是false。
}
//阻止事件
{
    //stopPropagation():阻止后续监听事件的发生
    //stopImmediatePropagation():立即阻止当前和后续事件的发生
    //preventDefault():它的作用是阻止事件的默认行为，例如a标签在click事件后的默认行为是链接到新的页面
}