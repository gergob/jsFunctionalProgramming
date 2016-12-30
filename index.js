
const funcPrime = require('./funcPrime');
const funcHelper = require('./funcHelper');

console.log('Hello Functional Programming in JS');

// console.log(funcPrime.mersenneNumber(2));
// console.log(funcPrime.mersenneNumber(3));
// console.log(funcPrime.mersenneNumber(5));
// console.log(funcPrime.mersenneNumber(7));
// console.log(funcPrime.mersenneNumber(13));
// console.log(funcPrime.mersenneNumber(17));
// console.log(funcPrime.mersenneNumber(19));
// console.log(funcPrime.mersenneNumber(31));

//console.log(funcPrime.isPrime(funcPrime.mersenneNumber(31)));

var x = [1,2,3];
var res = [];
var f = function(p) { return p * 2; }

funcHelper.forEach(x, function(item) {
    res.push(item * 2);
});

console.log(res);
console.log(funcHelper.map([1,2,3,4], function(x) { return 2*x;}));


console.log(funcPrime.isPrime(7));
