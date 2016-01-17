function largestPrimeFactor(num) {
  var i = 2;
  while (i < num) {
    if (num % i === 0)
      num /= i;
    else
      i += 1
  }
  return i;
}

console.log(largestPrimeFactor(600851475143));
