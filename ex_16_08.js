const person = {};

// 데이터 프로퍼티의 정의
Object.defineProperty(person, 'firstName', {
    value: 'SANGJUN',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'PARK'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

console.log(Object.keys(person));

person.lastName = 'Lee';

delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

Object.defineProperty(person, 'fullName', {

    get() {
        return `${this.firstName} ${this.lastName}`
    },
    
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },

    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'SANGJUN LEE';
console.log(person);