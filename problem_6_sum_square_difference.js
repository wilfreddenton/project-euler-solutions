function sumOfSquares(upperBound) {
  var squares = Array.apply(null, Array(upperBound)).map(function(_, i) {
    return Math.pow(i + 1, 2);
  });
  return squares.reduce(function(prev, curr) {
    return prev + curr;
  });
}
function squareOfSum(upperBound) {
  var sum = 0;
  for (var i = 1; i <= upperBound; i += 1) {
    sum += i;
  }
  return sum * sum;
}
function differenceSumSquare(upperBound) {
  return squareOfSum(upperBound) - sumOfSquares(upperBound);
}
console.log(differenceSumSquare(100));
