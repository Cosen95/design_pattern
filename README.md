## 面向对象

### 面向对象三要素

#### 1、继承，子类继承父类
继承可将公共方法抽离出来，提高复用，减少冗余

#### 2、封装，数据的权限和保密
* `public` 完全开放  `protected` 对子类开放    `private` 对自己开放
* 减少耦合，不该外露的不外露
* 利于数据、接口的权限管理
* es6目前不支持，一般认为，_开头的属性是private

#### 3、多态，同一接口不同实现
* 同一个接口，不同表现
* js应用极少
* 需要结合java等语言的接口、重写、重载等功能
* 保持子类的开放性和灵活性
* 面向接口编程

### 为何使用面向对象
* 程序执行：顺序、判断、循环 -- 结构化
* 面向对象 -- 数据结构化
* 对于计算机，结构化的才是最简单的
* 编程应该简单 & 抽象


### UML类图
* Unified Modeling Language 统一建模语言
* 类图
* 关系：泛化和关联
* 泛化：继承   关联：引用

## 设计原则

### S - 单一职责
* 一个程序只做好一件事
* 如果功能过于复杂就拆分开，每个部分保持独立

### O - 开放封闭
* 对扩展开放，对修改封闭
* 增加需求时，扩展新代码，而非修改已有代码

### L - 李氏置换
* 子类能覆盖父类
* 父类能出现的地方子类就能出现
* js中使用较少（弱类型 & 继承使用较少）

### I - 接口独立
* 保持接口的单一独立，避免出现‘胖接口’
* js中没有接口（ts除外），使用较少

### D - 依赖倒置
* 面向接口编程，依赖于抽象而不依赖于具体
* 使用方只关注接口而不关注具体类的实现

## 设计模式

### 工厂模式
* 将new操作单独封装
* 遇到new时，就要考虑是否该使用工厂模式
#### 应用场景
* jquery
```
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
```

* React.createElement
```
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
```

* vue异步组件
```
Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 1000)
})
```

### 单例模式
* 系统中被唯一使用
* 一个类只有一个实例
#### 应用场景
* jQuery只有一个$
