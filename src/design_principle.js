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