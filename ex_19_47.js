function Person(name) {
    this.name = name;
}

const me = new Person('PARK');

const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

console.log(Person.prototype === parent);
console.log(parent.constructor === Person);