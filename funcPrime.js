
const funcHelper = require('./funcHelper');

/*
 * Mersenne Numbers : 2^n - 1
 * where [n] is a number
 *
 * Mersenne Primes are numbers where
 * [n] is a prime number and the calculated
 * number is also prime
 */

function mersenneNumber(power) {
    let result = funcHelper.pow(2, power) - 1;
    return result;
}

function isPrime(num) {
    let result = true;
    if (num === 2 || num === 3) {
    	return true;
    }
    if (num % 2 === 0) {
    	return false;
    }
    let max = Math.ceil(Math.sqrt(num));
    
    funcHelper.for(3, max, 2, function(val) {
      if (num % val === 0) {
          result = false;
          return;
      }
    });

    return result;
}


module.exports = {
    mersenneNumber: mersenneNumber,
    isPrime: isPrime
}
