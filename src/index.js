import oop from './oop_example';
class Info {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let p = new Info('jack');
console.log(p.getName());