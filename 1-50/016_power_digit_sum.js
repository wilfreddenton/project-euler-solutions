var multiply = require('../utils').multiply;
var sum = require('../utils').sum;

function power(base, pow) {
  var num = [base];
  for (var i = 2; i <= pow; i += 1) {
    num = multiply(num, base);
  }
  return num
}
function powerDigitSum(base, pow) {
  return sum(power(base, pow));
}

console.log(powerDigitSum(2, 1000));
