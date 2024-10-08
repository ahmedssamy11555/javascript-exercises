const add = function (...numbers) {

  return numbers.reduce((total, number) => total += number)

};

const subtract = function (...numbers) {
  return numbers.reduce((total, number) => total -= number)
};

const sum = function (...numbers) {

  if (numbers.flat().length > 0) {
    return numbers.flat().reduce((total, number) => total += number)
  }
  return 0

};

const multiply = function (...numbers) {
  return numbers.flat().reduce((total, number) => total *= number)
};

const power = function (base, exponent) {

  return Math.pow(base, exponent)

};

const factorial = function (number) {
  if (number > 0) {
    return number * factorial(number - 1)
  }
  return 1
};


multiply([20, 10])

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
