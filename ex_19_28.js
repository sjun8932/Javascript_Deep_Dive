function Person(name) {
    this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function() {
    console.log(`Hi My name is ${this.name}`);
};

const me = new Person('Park');
const you = new Person('Jun');

me.sayHello();
you.sayHello();