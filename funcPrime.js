
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
    if (num === 2 || num === 3) {
    	return true;
    }
    if (num % 2 === 0) {
    	return false;
    }
    let max = Math.ceil(Math.sqrt(num));
    for (let i = 3; i <= max; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


module.exports = {
    mersenneNumber: mersenneNumber,
    isPrime: isPrime
}
