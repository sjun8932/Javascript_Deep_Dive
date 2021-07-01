function Person(name){
    this.name = name;
}

const me = new Person('PARK');


function isInstanceof(instance, constructor) {

    const prototype = Object.getPrototypeOf(instance);

    if (prototype === null) return false;

    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me, Object));
console.log(isInstanceof(me, Array));