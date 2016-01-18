var multiply = require('../utils').multiply;

function factorial(n) {
  if (n === 1) return 1;
  return multiply(n, factorial(n - 1));
}
function factorialDigitSum(n) {
  return factorial(n).reduce(function(prev, curr) {
    return prev + curr;
  });
}

console.log(factorialDigitSum(100));
