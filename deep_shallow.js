const flower = [{ name:'lily', color:'white' }];
[...flower];

console.log(flower);
console.log(clone);
console.log(flower === clone);

clone[0].name = 'Camellia';

console.log(flower);
console.log(clone);