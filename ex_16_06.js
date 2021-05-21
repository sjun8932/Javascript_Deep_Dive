const person = {
    // 데이터 프로퍼티
    firstName: 'Sangjun',
    lastName: 'Park',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName 값을 저장하면 setter 함수가 호출된다.
person.fullName = `jun'son`;
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);