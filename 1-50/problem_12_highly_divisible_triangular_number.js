// this is slow so be patient
function numDivisors(num) {
  if (num === 1) return 1;
  var count = 2; // account for 1 and itself
  for (var i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0)
      count += 1;
  }
  return count;
}
function divisibleTriangleNumber(numDivs) {
  var countDivs = 0;
  var countTriNum = 0;
  var triNum = 0;
  while (countDivs <= numDivs) {
    countTriNum += 1;
    triNum += countTriNum;
    countDivs = numDivisors(triNum);
  }
  return triNum;
}

console.log(divisibleTriangleNumber(500));
