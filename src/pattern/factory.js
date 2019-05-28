// 工厂模式
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun1() {
        console.log('fun1')
    }
    fun2() {
        console.log('fun2')
    }
}
class Creator {
    create(name) {
        return new Product(name)
    }
}

let creator = new Creator()
let product = creator.create('product')
product.init()
product.fun1()

// 应用场景
// jquery
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for(let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(node) {

    }
    html(data) {

    }
    // 此处省略若干API
}

window.$ = function(selector) {
    return new jQuery(selector)
}

// React.createElement
class Vnode {
    constructor(tag, attrs, children) {
        this.tag = tag
        this.attrs = attrs
        this.children = children
    }
    // ...此处省略大量代码
}
React.createElement = function(tag, attrs, children) {
    return new Vnode(tag, attrs, children)
}

// vue异步组件
Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 1000)
})