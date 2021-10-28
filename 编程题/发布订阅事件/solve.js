class EventTarget {
    constructor() {
        //内容为多个human:[fn1,fn2]
        this.listeners = {}
    }
    //订阅
    on(type, fn) {
        //如果订阅事件不在监听列表中,初始化函数列表
        if (!this.listeners[type]) {
            this.listeners[type] = []
        }
        //加入函数
        this.listeners[type].push(fn)
    }
    //一次订阅
    once(type, fn) {
        //同上订阅,给函数添加监视属性
        //如果订阅事件不在监听列表中,初始化函数列表
        if (!this.listeners[type]) {
            this.listeners[type] = []
        }
        //添加监视属性
        fn._once = true
        //加入函数
        this.listeners[type].push(fn)
    }
    //取消某一个函数的订阅
    //也可以实现全部取消订阅
    off(type, fn) {
        //是否存在订阅事件
        let listernHuman = this.listeners[type]
        if (! Array.isArray(listernHuman)) {
            throw new Error(`不存在订阅事件:${listernHuman}`)
        }
        //监听列表中是否存在此回调函数
        if (listernHuman[fn]) {
            throw new Error(`不存在此回调函数L:${fn}`)
        }
        //移除fn
        this.listeners[type] = listernHuman.filter((value) => value == fn ? false : true)
    }
    //给某个回调函数发布信息
    trigger(type, message) {
        //判断是否有订阅类型
        if (!this.listeners[type]) {
            throw new Error(`不存在订阅事件:${type}`)
        }
        //给所有的回调函数发送信息
        this.listeners[type].forEach(key => {
            key(message)
            if (key._once) {
                this.off(type, key)
            }
        });
    }

}

function handleMessage(event) { console.log(`message received: ${event}`); }

function handleMessage2(event) { console.log(`message2 received: ${event}`); }

const target = new EventTarget();

target.on('message', handleMessage);
target.on('message', handleMessage2);
target.trigger('message', 'hello custom event'); // 打印 message，message2

target.off('message', handleMessage);
target.trigger('message', 'off the event'); // 只打印 message2