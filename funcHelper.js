function isNumber(n) {
    return isFinite(n) && +n === n;
}

function isFunction(fn) {
    return typeof callback === 'function';
}

function areNumbers(numbers) {
    if (numbers.length === 0) {
        return true;
    }

    return isNumber(numbers[0]) && areNumbers(numbers.slice(1));
}

function funcFor(first, last, step, callback) {
    // check params
    if (!areNumbers([first,last,step])) {
        throw 'first/last/step should be finite numbers.';
    }
    if (isFunction(callback)) {
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


function pow(base, power) {
    if (power === 0) {
        return 1;
    }
    return base * pow(base, power - 1);
}

function funcForEach(items, fn) {
    return funcFor(0, items.length, 1, function(idx) {
        fn(items[idx]);
    });
}

function funcMap(items, fn) {
    var result = [];
    funcForEach(items, function(item) {
        result.push(fn(item));
    });
    return result;
}

module.exports = {
    pow: pow,
    for: funcFor,
    forEach: funcForEach,
    map: funcMap,
}
