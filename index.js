
const funcPrime = require('./funcPrime');
const funcHelper = require('./funcHelper');

console.log('Hello Functional Programming in JS');

// testing pow


let start = new Date().getTime();
let result_standard = [
  funcHelper.pow(2, 0),
  funcHelper.pow(2, 1),
  funcHelper.pow(2, 2),
  funcHelper.pow(2, 3),
  funcHelper.pow(2, 4),
  funcHelper.pow(2, 5),
  funcHelper.pow(2, 10),
  funcHelper.pow(2, 20),
  funcHelper.pow(2, 30),
  funcHelper.pow(1, 10000),
  funcHelper.pow(2, 40),
  funcHelper.pow(3, 10),
  funcHelper.pow(4, 15),
  funcHelper.pow(1, 11000),
  funcHelper.pow(3.22, 125),
  funcHelper.pow(3.1415, 89),

];

let duration = new Date().getTime() - start;
console.log(result_standard);
console.log(`Duration: ${duration} ms.`);

console.log();
start = new Date().getTime();
let result_es6 = [
  funcHelper.powES6(2, 0),
  funcHelper.powES6(2, 1),
  funcHelper.powES6(2, 2),
  funcHelper.powES6(2, 3),
  funcHelper.powES6(2, 4),
  funcHelper.powES6(2, 5),
  funcHelper.powES6(2, 10),
  funcHelper.powES6(2, 20),
  funcHelper.powES6(2, 30),
  funcHelper.powES6(1, 10000),
  funcHelper.powES6(2, 40),
  funcHelper.powES6(3, 10),
  funcHelper.powES6(4, 15),
  funcHelper.powES6(3.22, 125),
  funcHelper.powES6(3.1415, 89),

];
duration = new Date().getTime() - start;
console.log(result_es6);
console.log(`Duration: ${duration} ms.`);




// console.log(funcPrime.mersenneNumber(2));
// console.log(funcPrime.mersenneNumber(3));
// console.log(funcPrime.mersenneNumber(5));
// console.log(funcPrime.mersenneNumber(7));
// console.log(funcPrime.mersenneNumber(13));
// console.log(funcPrime.mersenneNumber(17));
// console.log(funcPrime.mersenneNumber(19));
// console.log(funcPrime.mersenneNumber(31));

//console.log(funcPrime.isPrime(funcPrime.mersenneNumber(31)));

var x = [1,2,3,4,5];
var y = [6,7,8,'a',9,10,'b',11];
var double = function(p) { return p * 2; }

// console.log(funcHelper.applyIfAllNumbers(x, double));
// console.log(funcHelper.applyIfAllNumbers(y, double));
//
// console.log(funcHelper.applyForNumbersOnly(y, double));

// var res = [];
//
//
// funcHelper.forEach(x, function(item) {
//     res.push(item * 2);
// });
//
// console.log(res);
// console.log(funcHelper.map([1,2,3,4], function(x) { return 2*x;}));
//
//
// console.log(funcPrime.isPrime(7));
//
// console.log(funcHelper.filter(x, function(nr) { return nr * 2 > 3;}))
