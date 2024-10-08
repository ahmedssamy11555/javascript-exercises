const fibonacci = function (n) {

    if (Number(n) < 0) return "OOPS"
    if (Number(n) === 0) return 0;
    if (Number(n) === 1) return 1;

    // Recursive case: Sum of previous two Fibonacci numbers
    return fibonacci(Number(n) - 1) + fibonacci(Number(n) - 2);
};

// Do not edit below this line
module.exports = fibonacci;
