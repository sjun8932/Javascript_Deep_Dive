const Counter =  (function () {
    // 카운트 상태 변수
    let num = 0;

    function Counter() {
        // this.num = 0; // 프로퍼티는 public 하므로 은닉되지 않는다.
    }

    Counter.prototype.increase = function () {
        return ++num;
    }

    Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
    }
    
    return Counter;

}());


const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());
