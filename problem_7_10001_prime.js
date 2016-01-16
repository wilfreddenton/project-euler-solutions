function isPrime(num) {
  var sqrtN = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sqrtN; i += 1) {
    if (num % i === 0)
      return false;
  }
  return true;
}
function getPrime(num) {
  if (num === 1) return 2;
  var numPrime = 1
  var i = 3;
  while (numPrime !== num) {
    if (isPrime(i))
      numPrime += 1;
    if (numPrime !== num)
      i += 2;
  }
  return i;
}

console.log(getPrime(10001));
