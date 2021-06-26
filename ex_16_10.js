const person = { name: 'PARK' };

console.log(Object.isExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age  = 20; // 무시. strict mode에서는 에러
console.log(person);

delete person.name;
console.log(person);

Object.defineProperty(person, 'age', { value: 20 });