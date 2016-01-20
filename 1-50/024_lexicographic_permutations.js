var list = require('../utils').list;

function nonIncreasingSuffix(perm) {
  for (var i = perm.length - 1; i > 0; i -= 1) {
    if (perm[i - 1] < perm[i]) {
      return i;
    }
  }
}
function rightMostSuccessor(perm, pivotIndex, suffixStart) {
  var successorIndex = suffixStart;
  var successor = perm[suffixStart];
  var pivot = perm[pivotIndex];
  for (var i = suffixStart + 1; i <= perm.length; i += 1) {
    var num = perm[i];
    if (num > pivot && num <= successor) {
      successorIndex = i;
      successor = num;
    }
  }
  return successorIndex;
}
function reverse(arr) {
  return arr.length === 0 ? [] : reverse(arr.slice(1)).concat(arr[0]);
}
function nextPermutation(perm) {
  perm = perm.slice();
  var suffixStart = nonIncreasingSuffix(perm);
  var pivotIndex = suffixStart - 1;
  var rightMostSuccessorIndex = rightMostSuccessor(perm, pivotIndex, suffixStart);
  var pivot = perm[pivotIndex];
  perm[pivotIndex] = perm[rightMostSuccessorIndex];
  perm[rightMostSuccessorIndex] = pivot;
  var reversedSuffix = reverse(perm.slice(suffixStart));
  perm = perm.slice(0, suffixStart).concat(reversedSuffix);
  return perm;
}
function lexicographicPermutations(n, upperBound) {
  var start = list(n + 1);
  var perms = [start];
  for (var i = 1; i < upperBound; i += 1) {
    perms.push(nextPermutation(perms[i - 1]))
  }
  return perms;
}
function lexicographicPermutation(n, upperBound) {
  var perms = lexicographicPermutations(n, upperBound);
  return perms[upperBound - 1].join('');
}

console.log(lexicographicPermutation(9, 1000000));
