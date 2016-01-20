var list = require('../utils').list;

function lexicographicPermutations(upperBound) {
  var nums = list(upperBound + 1)
  return nums;
}

console.log(lexicographicPermutations(9));
