// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};

const baz = {
    x: function() {}
};

new foo();
new bar();

new baz.x(); 

const arrow = () => {};

new arrow();

const obj = {
    x() {}
};

new obj.x();
