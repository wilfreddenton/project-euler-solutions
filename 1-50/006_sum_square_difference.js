var utils = require('../utils');

function sumOfSquares(upperBound) {
  var squares = utils.list(upperBound, function(_, i) {
    return Math.pow(i + 1, 2);
  });
  return utils.sum(squares);
}
function squareOfSum(upperBound) {
  var sum = utils.sum(utils.list(upperBound + 1), function(_, i) {
    return i + 1;
  });
  return sum * sum;
}
function differenceSumSquare(upperBound) {
  return squareOfSum(upperBound) - sumOfSquares(upperBound);
}

console.log(differenceSumSquare(100));
