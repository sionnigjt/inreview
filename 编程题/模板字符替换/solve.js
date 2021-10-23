var template = '{{name}}很厉害,才{{age}}岁';
var context = { name: 'bottle', age: '18' }
//简单的正则
function render(template = "", context = "") {
    return template.replace(/\{\{(.*?)\}\}/g, (match, string) => {
        return context[string.trim()]
    })
}

console.log(render(template, context));
//高级用法,移植到原型链上
String.prototype.render = function (context) {
    return this.replace(/\{\{(.*?)\}\}/g, (match, string) => {
        console.log(match,string);
        return context[string.trim()]
    })
}

console.log('{{name}}很厉害,才{{age}}岁'.render(context));
//replace的运用
