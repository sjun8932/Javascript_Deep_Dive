class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    sayHi() {
        return `${super.sayHi()}. how are you doing?`;
    }
}





const derived = new Derived('PARK');
console.log(derived.sayHi());
