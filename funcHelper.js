"use strict"

function isNumber(n) {
    return isFinite(n) && +n === n;
}

function isFunction(fn) {
    return typeof fn === 'function';
}

function areNumbers(numbers) {
    if (numbers.length === 0) {
        return true;
    }
    else {
        return isNumber(numbers[0])
               && areNumbers(numbers.slice(1));
    }
}

function funcFor(first, last, step, callback) {
    // check params
    if (!areNumbers([first,last,step])) {
        throw 'first/last/step should be finite numbers.';
    }
    if (!isFunction(callback)) {
        throw 'callback should be a function, with a single index parameter.';
    }
    if (step === 0) {
        throw 'step shouldn\'t be zero. it would lead to infinite loop.';
    }
    if ((step > 0 && first > last) || (step < 0 && first <= last)) {
        throw 'invalid first/last/step combination. it would lead to infinite loop.';
    }
    // recursive inner function
    function inner(index) {
        if ((step > 0 && index >= last) || (step < 0 && index < last)) {
            return;
        }
        callback(index);
        // next (proper tail call)
        inner(index + step);
    }
    // start with the first
    inner(first);
}

function powES6(base, power, result=base) {
    if (power === 0) {
        return 1;
    }

    if (power === 1) {
        return result;
    }

    return powES6(base, power - 1, result * base);
}

function recursivePow(base, power, result) {
    if (power === 0) {
        return 1;
    }
    else if(power === 1) {
        return result;
    }

    return recursivePow(base, power - 1, result * base);
}

function pow(base, power) {
    return recursivePow(base, power, base);
}

function funcForEach(items, fn) {
    return funcFor(0, items.length, 1, function(idx) {
        fn(items[idx]);
    });
}

function filter(items, fn) {
    let result = [];
    funcForEach(items, function(item) {
        if(fn(item)) {
          result.push(item);
        }
    });
    return result;
}

function funcMap(items, fn) {
    let result = [];
    funcForEach(items, function(item) {
        result.push(fn(item));
    });
    return result;
}

function applyIfAllNumbers(items, fn) {
    if(areNumbers(items)) {
        return funcMap(items, fn);
    }
    return [];
}

function applyForNumbersOnly(items, fn) {
    let numbers = filter(items, isNumber);
    return funcMap(numbers, fn);
}


module.exports = {
    areNumbers: areNumbers,
    applyForNumbersOnly: applyForNumbersOnly,
    applyIfAllNumbers: applyIfAllNumbers,
    filter: filter,
    for: funcFor,
    forEach: funcForEach,
    isNumber: isNumber,
    map: funcMap,
    pow: pow,
    powES6: powES6
}
