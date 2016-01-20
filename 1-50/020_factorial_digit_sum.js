var multiply = require('../utils').multiply;
var sum = require('../utils').sum;

function factorial(n) {
  if (n === 1) return 1;
  return multiply(n, factorial(n - 1));
}
function factorialDigitSum(n) {
  return sum(factorial(n));
}

console.log(factorialDigitSum(100));
