const sumAll = function (start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    const adjustedStart = start > end ? end : start
    const adjustedEnd = end < start ? start : end
    let sum = 0
    for (let i = adjustedStart; i <= adjustedEnd; i++) {
        sum += i
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
