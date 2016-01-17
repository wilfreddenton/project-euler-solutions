// this is basically an implementation of handwritten long multiplication
// array representation and manipulation solves the problem of working with
// large numbers
function power(base, pow) {
  var num = [];
  for (var i = 1; i <= pow; i += 1) {
    if (i === 1) {
      num.push(base);
    } else {
      var carry = 0;
      var tmpNum = num.slice();
      for (var j = num.length - 1; j >= 0; j -= 1) {
        tmpDigit = num[j] * base;
        var nextCarry = 0;
        if (tmpDigit > 9) {
          tmpDigitArr = tmpDigit.toString().split('').map(function(digit) {
            return parseInt(digit);
          });
          nextCarry = tmpDigitArr[0];
          tmpNum[j] = tmpDigitArr[1];
        } else {
          tmpNum[j] = tmpDigit;
        }
        tmpNum[j] += carry;
        carry = nextCarry;
      }
      if (carry !== 0) {
        tmpNum.unshift(carry);
      }
      num = tmpNum.slice();
    }
  }
  return num;
}
function powerDigitSum(base, pow) {
  return power(base, pow).reduce(function(prev, curr) {
    return prev + curr;
  });
}

console.log(powerDigitSum(2, 1000));
