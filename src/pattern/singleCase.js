// java代码实现
// public class SingleObject {
//     // 注意，私有化构造函数，外部不能new，只能内部new
//     private SingleObject() {

//     }
//     // 唯一被new出来的对象
//     private SingleObject instance = null
//     // 获取对象的唯一接口
//     public SingleObject getInstance() {
//         if(instance == null) {
//             instance = new SingleObject()
//         }
//         return instance
//     }
//     // 对象方法
//     public void login(username, password) {
//         System.out.println("i'm login")
//     }
// }

// javascript代码实现
class SingleObject {
    login() {
        console.log('login...')
    }
}
SingleObject.getInstance = (function() {
    let instance
    return function() {
        if(!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log('ob1 === obj2', obj1 === obj2)
console.log('------分割线------')
let obj3 = new SingleObject()
obj3.login()
console.log('ob1 === obj3', obj1 === obj3)  // 无法像java实现完全控制（内部私有化）

// 应用场景

// jQuery只有一个$
// if(window.jQuery != null) {
//     return window.jQuery
// } else {
//     // 初始化...
// }
class LoginForm {
    constructor() {
        this.visible = 'hide'
    }
    show() {
        if(this.visible === 'show') {
            alert('已经显示')
            return
        }
        this.visible = 'show'
        console.log('登录框已显示')
    }
    hide() {
        if(this.visible === 'hide') {
            alert('已经隐藏')
            return
        }
        this.visible = 'hide'
        console.log('登录框已隐藏')
    }
}
LoginForm.getInstance = (function() {
    let instance
    return function() {
        if(!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()
console.log('login1 === login2', login1 === login2)

