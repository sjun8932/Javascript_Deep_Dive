function deepFreeze(target) {
    console.log(target && typeof target);
    if(target && typeof target === 'object' && !Object.isFrozen(target)) {

        Object.freeze(target);


        Object.keys(target).forEach(Key => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    
    name: 'Park',
    adress: { city: 'Seoul' }
};

deepFreeze(person);

console.log(Object.isFrozen(person));

console.log(Object.isFrozen(person.adress));

person.adress.city = 'Busan';

console.log(person);