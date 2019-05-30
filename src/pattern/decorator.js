// 装饰器模式
import { readonly, deprecate } from 'core-decorators'

class Fruit {
    @readonly
    price = '$10/kg'
}

let morning = new Fruit();
morning.price = '$12/kg'    // Cannot assign to read only property 'price' of [object Object]


class Person {
    @deprecate
    facepalm() {}
   
    @deprecate('We stopped facepalming')
    facepalmHard() {}
   
    @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
    facepalmHarder() {}
  }
   
  let person = new Person();
   
  person.facepalm();
  // DEPRECATION Person#facepalm: This function will be removed in future versions.
   
  person.facepalmHard();
  // DEPRECATION Person#facepalmHard: We stopped facepalming
   
  person.facepalmHarder();
  // DEPRECATION Person#facepalmHarder: We stopped facepalming
  //
  //     See http://knowyourmeme.com/memes/facepalm for more details.
  //


  
// class Circle {
//     draw() {
//         console.log('画一个圆形')
//     }
// }

// class Decorator {
//     constructor(circle) {
//         this.circle = circle
//     }
//     draw() {
//         this.circle.draw()
//         this.setRedBorder(circle)
//     }
//     setRedBorder(circle) {
//         console.log('设置红色边框')
//     }
// }

// let circle = new Circle()
// circle.draw()

// let decorator = new Decorator(circle)
// decorator.draw()


// function testDemo(isDecorator) {
//     return function(target) {
//         target.isDecorator = isDecorator
//     }
// }

// @testDemo(false)
// class Decorator {

// }

// function mixins(...list) {
//     return function(target) {
//         Object.assign(target.prototype, ...list)
//     }
// }

// const Foo = {
//     foo() {
//         console.log('foo')
//     }
// }
// @mixins(Foo)
// class Boo {

// }
// let bug = new Boo()
// bug.foo()   // foo