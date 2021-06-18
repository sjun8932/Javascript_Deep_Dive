const o = { x: { y:1 }};

const c1 = { ...o };

const _ = require('lodash');

const c2 = _.cloneDeep(o);
// console.log(c2);
// console.log(c2 === o);
console.log(c2.x);
console.log(o.x);