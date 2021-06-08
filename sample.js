const counter = (function () {
    
    let a = 0;
    let b = 0;

    return function (predicate,predicate2) {
        a = predicate (a);
        b = predicate2 (b);
        return a+b;
    }

}());

function inc(n){
    return ++n;
}

function inc2(n){
    return ++n;
}

function dec(n){
    return --n;
}

function dec2(n){
    return --n;
}

console.log(counter(inc,inc2));
console.log(counter(inc,inc2));

console.log(counter(dec,dec2));
console.log(counter(dec,dec2));