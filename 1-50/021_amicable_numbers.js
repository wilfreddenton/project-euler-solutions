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
function amicableNumbers(upperBound) {
  var bools = utils.list(upperBound - 1, function() { return false; });
  for (var i = 1; i < upperBound; i += 1) {
    var sum = d(i);
    if (!bools[i - 1] && sum < upperBound && sum !== i && d(sum) === i) {
      bools[i - 1] = true;
      bools[sum - 1] = true;
    }
  }
  var amiNums = bools.map(function(bool, i) {
    return bool ? i + 1 : 0;
  });
  return amiNums.filter(function(num) {
    return num !== 0;
  });
}

console.log(utils.sum(amicableNumbers(10000)));
