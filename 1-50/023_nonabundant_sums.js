var utils = require('../utils');

function divisors(num) {
  var divs = [1];
  for (var i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0)
      divs.push(i);
  }
  return divs;
}
function d(n) {
  return utils.sum(divisors(n));
}
function sumsOfPairs(arr) {
  var sums = [];
  for (var i = 0; i < arr.length - 1; i += 1) {
    for (var j = i; j < arr.length; j += 1) {
      sums.push(arr[i] + arr[j]);
    }
  }
  return sums;
}
function isAbundant(num) {
  return d(num) > num;
}
function abundantNumbers(upperBound) {
  var nums = [];
  for (var i = 1; i <= upperBound; i += 1) {
    if (isAbundant(i))
      nums.push(i);
  }
  return nums;
}
function nonAbundantSum(upperBound) {
  var bools = utils.list(upperBound, function() { return true; });
  var abundantNums = abundantNumbers(upperBound);
  var abundantSums = sumsOfPairs(abundantNums);
  abundantSums.forEach(function(sum) {
    bools[sum - 1] = false;
  });
  var nonAbundantNums = bools.map(function(bool, i) {
    if (bool)
      return i + 1;
    else
      return 0;
  });
  return utils.sum(nonAbundantNums);
}

console.log(nonAbundantSum(20161));
