const Person = ( function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
    console.log(`Hi today is Saturday~~ good to see you ${this.name}`)
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Park');

// 인스턴스 메서드
me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};


// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello();

delete me.sayHello;
me.sayHello();

delete me.sayHello;
me.sayHello();



