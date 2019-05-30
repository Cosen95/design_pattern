// 装饰器模式

class Circle {
    draw() {
        console.log('画一个圆形')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder(circle) {
        console.log('设置红色边框')
    }
}

let circle = new Circle()
circle.draw()

let decorator = new Decorator(circle)
decorator.draw()


// function testDemo(isDecorator) {
//     return function(target) {
//         target.isDecorator = isDecorator
//     }
// }

// @testDemo(false)
// class Decorator {

// }

function mixins(...list) {
    return function(target) {
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        console.log('foo')
    }
}
@mixins(Foo)
class Boo {

}
let bug = new Boo()
bug.foo()   // foo