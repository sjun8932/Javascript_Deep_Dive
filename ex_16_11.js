const person = { name: 'PARK'};

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

person.name = 'LEE'
console.log(person);

Object.defineProperty(person, 'name', { configurable: true });

