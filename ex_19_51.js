let obj = Object.create(null);

console.log(Object.getPrototypeOf(obj) === null);

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);