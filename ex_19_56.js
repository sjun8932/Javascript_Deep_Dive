function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi ! My name is ${this.name}`);
};

Person.staticProp = 'static prop';

Person.staticMethod = function () {
    console.log('staticMethod');
};

const me = new Person('PARK');

Person.staticMethod();