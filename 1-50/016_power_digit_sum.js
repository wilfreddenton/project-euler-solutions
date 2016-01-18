var multiply = require('../utils').multiply;

function power(base, pow) {
  var num = [base];
  for (var i = 2; i <= pow; i += 1) {
    num = multiply(num, base);
  }
  return num
}
function powerDigitSum(base, pow) {
  return power(base, pow).reduce(function(prev, curr) {
    return prev + curr;
  });
}

console.log(powerDigitSum(2, 1000));
