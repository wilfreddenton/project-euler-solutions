function reverseInPlace(str) {
  return str === '' ? '' : reverseInPlace(str.slice(1)) + str[0];
}
function isPalindrome(num) {
  return num === parseInt(reverseInPlace(num.toString()))
}
function largestPalindromeProduct3Digits() {
  var max = -1;
  for (var i = 100; i <= 999; i += 1) {
    for (var j = i; j <= 999; j += 1) {
      var num = j * i;
      if (isPalindrome(num) && num > max)
        max = num;
    }
  }
  return max;
}

console.log(largestPalindromeProduct3Digits());
