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