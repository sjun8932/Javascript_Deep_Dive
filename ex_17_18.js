function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle = Circle(5);

console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

console.log(circle.getDiameter());

function Circle2(radius) {
    this.radius = radius;
    this.getDiameter = function (){
        return 2 * this.radius;
    };
}

const circle2 = new Circle2(5);

console.log(circle2.radius);
console.log(circle2.getDiameter());
