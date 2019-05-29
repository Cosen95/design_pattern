// 适配器模式

class Adaptee {
    specificRequest() {
        return '德国标准的插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} -> 转换器 -> 中国标准的插头`
    }
}

let target = new Target()
target.request()

// 应用场景
// 封装旧接口
ajax({
    url: '',
    type: 'post',
    dataType: 'application/json',
    data: {
        id: 3
    }
})
.done(function() {

})
var $ = {
    ajax: function(options) {
        return ajax(options)
    }
}

$.ajax({
    // ...
})

// vue computed
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})