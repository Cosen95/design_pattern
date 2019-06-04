class Real {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFromDisk()     // 初始化，从硬盘中加载（模拟）
    }
    display() {
        console.log('display...' + this.fileName)
    }
    loadFromDisk() {
        console.log('loading...' + this.fileName)
    }
}

class Proxy {
    constructor(fileName) {
        this.real = new Real(fileName)
    }
    display() {
        this.real.display()
    }
}

let proxyImg = new Proxy('flower.png')
proxyImg.display()

// 应用场景
// jQuery $.proxy
$('#div').click(function() {
    var _this = this;
    setTimeout(function() {
        $(_this).addClass('container')
    }, 1000)
})

$('#div').click(function() {
    setTimeout($.proxy(function() {
        $(this).addClass('container')
    }, this), 1000)
})

// es6 proxy
// 明星经纪人
let star = {
    name: 'xxx',
    age: 25,
    phone: '18703738860'
}

let agent = new Proxy(star, {
    get: function(target, key) {
        if(key === 'phone') {
            // 返回经纪人自己的手机号
            return '17521098150'
        }
        if(key === 'price') {
            // 经纪人报价
            return 120000
        }
        return target[key]
    },
    set: function(target, key, val) {
        if(key === 'customPrice') {
            if(val < 100000) {
                // 最低10w
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
    }
})