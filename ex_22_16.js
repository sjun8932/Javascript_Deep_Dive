
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
};

const me = new Person('PARK');

// getName 메서드를 호출한 객체는 me다.
console.log(me.getName()); // PARK

Person.prototype.name = 'JAMIE';


// getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName()); //JAMIE