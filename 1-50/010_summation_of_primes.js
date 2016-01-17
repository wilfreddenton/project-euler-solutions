function isPrime(num) {
  var sqrtN = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sqrtN; i += 1) {
    if (num % i === 0)
      return false;
  }
  return true;
}

function sumOfPrimes(upperBound) {
  var sum = 2;
  for (var i = 3; i < upperBound; i += 2) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

console.log(sumOfPrimes(2000000));
