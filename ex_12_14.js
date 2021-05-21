var add1 = (function(){
    var a = 10;
    return function (x,y) {
        return x + y + a; 
    };
}());

console.log(add(1,2));

var add2 = (function(){
    var a = 10;
    return new Function('x', 'y', 'return x+y+a');
}());

console.log(add(1,2));