const person = new Object();

person.name = 'PARK';
person.sayHello = function () {

    console.log(' 그의 이름은 ' + this.name + ' SANGJUN ');
};

console.log(person);
person.sayHello();