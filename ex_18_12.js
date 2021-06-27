const obj = { a:1 };

console.log(obj.__proto__);

console.log(Object.prototype);

console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));