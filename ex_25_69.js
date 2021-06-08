class Base {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hi, ${this.name}`;
    }
}

class Derived extends Base {
    sayHi(){
        const __super = Object.getPrototypeOf(Derived.prototype);
        return `${__super.sayHi.call(this)} how are you doing?`;
    }
}