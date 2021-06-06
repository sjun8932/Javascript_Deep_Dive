const x = 1;

function foo() {
    eval('var x = 2; console.log(x);'); // 2
    // let const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
    eval('const x = 3; console.log(x);') // 3
    console.log(x);  2
}

foo();
console.log(x); // 1

// eval 함수를 통해 사용자로부터 입력받은 콘텐츠를 실행하는 것은 
// 보안에 매우 취약하다. 또한 eval 함수를 통해 실행되는 코드는 
// 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 
// 비해 처리 속도가 느리다. 그래서 eval 함수의 사용은 금지해야 한다.
