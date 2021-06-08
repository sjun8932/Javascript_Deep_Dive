function Person(name, age) {
    this.name = name;
    let _age = age;

    Person.prototype.sayHi = function () {
        console.log(`Hi My Name is ${this.name}. I am ${_age}.`);
    };
}

const me = new Person('Park',33);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person('Lee', 23);
you.sayHi();

console.log(you.name);
console.log(you._age);