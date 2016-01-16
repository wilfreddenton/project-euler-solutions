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

console.log(fib(4000000).filter(function(fib) { return fib % 2 === 0; }).reduce(function(prev, curr) { return prev + curr }));
