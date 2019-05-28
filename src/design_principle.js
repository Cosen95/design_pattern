// promise简单实现 设计原则
function loadImg(src) {
    let promise = new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src = 'https://avatars0.githubusercontent.com/u/26785201?s=460&v=4';
let result = loadImg(src);

result.then(img => {
    console.log(`width: ${img.width}`)
    return img
}).then(img => {
    console.log(`height: ${img.height}`)
}).catch(err => {
    console.log(err)
})

// -------------------- 面试题 -----------------------

class Car {
    constructor(number, name) {
        this.number = number
        this.name = name
    }
}
class KuaiChe extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 10
    }
}
class ZhuanChe extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 15
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，名称：${this.car.name}, 车牌号：${this.car.number}`)
    }
    end() {
        console.log(`行程结束，价格：${this.car.price * 5}`)
    }
}

let car = new KuaiChe('沪A666', '雷克萨斯');
let trip = new Trip(car)
trip.start()
trip.end()
