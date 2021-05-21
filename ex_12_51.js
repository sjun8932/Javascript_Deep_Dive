function repeat(n,f) {
    for (var i = 0; i < n; i++){
        f(i); // i 를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
}

// 반복 호출할 함수를 인수로 전달한다.
repeat(5,logAll);

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds);