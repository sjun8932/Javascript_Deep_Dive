// 자바스크립트의 모듈 패턴 

var Counter = (function(){
    //private 변수
    var num = 0;

    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return{
        increase() {
            return ++num;
        },
        decrease(){
            return --num;
        }
    };
}());

console.log(Counter.num);

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());