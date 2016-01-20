var sum = require('../utils').sum;

function fib(upperBound) {
  var prev = 1;
  var curr = 2;
  var fibs = [prev, curr];
  while (curr + prev < upperBound) {
    var tmpCurr = curr;
    curr += prev;
    fibs.push(curr);
    prev = tmpCurr;
  }
  return fibs;
}
function evenFibNums(upperBound) {
  return sum(fib(upperBound).filter(function(fib) { return fib % 2 === 0; }));
}

console.log(evenFibNums(4000000));
