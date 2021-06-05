function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Nodejs 환경에서는 global을 가르킨다.

foo(); // window

const obj = {foo};

obj.foo();

const inst = new foo();

