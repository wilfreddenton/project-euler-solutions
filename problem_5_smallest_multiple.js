function evenlyDivisible(upperBound, num) {
  for (var i = 1; i <= upperBound; i += 1) {
    if (num % i !== 0)
      return false;
  }
  return true;
}
function smallestMultiple(upperBound) {
  var i = upperBound;
  var found = false;
  while (!found) {
    if (evenlyDivisible(upperBound, i))
      found = true;
    else
      i += upperBound;
  }
  return i;
}

console.log(smallestMultiple(20));
