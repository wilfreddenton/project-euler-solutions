var sum = require('../utils').sum;
var list = require('../utils').list;

function multipleOf3And5(num) {
  if (num % 3 === 0 || num % 5 === 0)
    return true
  else
    return false
}
function sumOfMultiples(upperBound) {
  return sum(list(upperBound).filter(multipleOf3And5));
}

console.log(sumOfMultiples(1000));
