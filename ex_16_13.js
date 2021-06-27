const person = {
    name: 'PARK',
    adress: {city: 'Seoul'}
};

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.isFrozen(person.adress));

person.adress.city = 'Busan';
console.log(person);