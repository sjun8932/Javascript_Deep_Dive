const x = 1;

function foo() {
    // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
    eval('var x = 2;');
    console.log(x);
}

foo();
console.log(x); // 1

// ex_21-18 반드시 참고