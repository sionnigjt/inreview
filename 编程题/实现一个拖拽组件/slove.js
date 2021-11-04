//title:实现一个拖拽组件
//前置知识:js事件流,理解stopPropagation此类函数
class Dialog {
    constructor(text) {
        this.relativeX = 0
        this.relativeY = 0
        this.x
        this.y
        this.text = text || ''
        this.isMoving = false
        this.dialog
    }
    open() {
        //一个全局界面的div盒子
        const model = document.createElement('div')
        model.id = 'model'
        model.style = `
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-color:rgba(0,0,0,.3);
        display:flex;
        justify-content: center;
        align-items: center;`
        model.addEventListener('click', e => {
            this.close()//没有参数可直接使用,不需要绑定this
            console.log(e.eventPhase);
        }, false)
        document.body.appendChild(model)
        //主要内容
        this.dialog = document.createElement('div')
        this.dialog.style = `
        padding:20px;
        background-color:white`
        this.dialog.innerText = this.text
        //阻止冒泡时model中div的click
        this.dialog.addEventListener('click', e => { e.stopPropagation() }, true)
        //实现点击操作
        this.dialog.addEventListener('mousedown', this.handleMousedown.bind(this))
        document.addEventListener('mousemove', this.handleMousemove.bind(this))
        document.addEventListener('mouseup', this.handleMouseup.bind(this))
        model.appendChild(this.dialog)
    }
    close() {
        this.dialog.removeEventListener('mousedown', this.handleMousedown)
        document.removeEventListener('mousemove', this.handleMousemove)
        document.removeEventListener('mouseup', this.handleMouseup)
        document.body.removeChild(document.querySelector('#model'))
    }
    handleMousedown(e) {
        this.isMoving = true
        this.x = e.clientX
        this.y = e.clientY
        console.log(e);
    }
    handleMousemove(e) {
        if (this.isMoving) {
            this.dialog.style.transform = `translate(${e.clientX - this.x + this.relativeX}px,${e.clientY - this.y + this.relativeY}px)`
        }
    }
    handleMouseup(e) {
        this.relativeX = e.clientX - this.x + this.relativeX
        this.relativeY = e.clientY - this.y + this.relativeY
        this.isMoving = false
    }
}
let dialog = new Dialog('Hello')
dialog.open()