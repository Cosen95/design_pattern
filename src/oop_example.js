// 面向对象三要素

// 1、继承，子类继承父类
// 继承可将公共方法抽离出来，提高复用，减少冗余

// 2、封装，数据的权限和保密
// public 完全开放  protected 对子类开放    private 对自己开放
// 减少耦合，不该外露的不外露
// 利于数据、接口的权限管理
// es6目前不支持，一般认为，_开头的属性是private

// 3、多态，同一接口不同实现
// 同一个接口，不同表现
// js应用极少
// 需要结合java等语言的接口、重写、重载等功能
// 保持子类的开放性和灵活性
// 面向接口编程

// ------------------------------------------

// 为何使用面向对象

// 程序执行：顺序、判断、循环 -- 结构化
// 面向对象 -- 数据结构化
// 对于计算机，结构化的才是最简单的
// 编程应该简单 & 抽象

// ------------------------------------------

// UML类图
// Unified Modeling Language 统一建模语言
// 类图
// 关系：泛化和关联
// 泛化：继承   关联：引用
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
var $p = $('p')
console.log($p)
console.log($p.addClass)