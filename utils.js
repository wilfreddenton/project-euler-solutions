function toIntArray(num) {
  return num.toString().split('').map(function(i) { return parseInt(i); });
}
function performCarries(intArray, end) {
  var intArrayCopy = intArray.slice();
  if (intArray[end] > 9) {
    var digits = toIntArray(intArray[end]);
    intArrayCopy[end] = digits[1];
    if (end - 1 >= 0) {
      intArrayCopy[end - 1] += digits[0];
      return performCarries(intArrayCopy, end - 1);
    } else {
      intArrayCopy.unshift(digits[0]);
      return intArrayCopy;
    }
  } else {
    if (end - 1 >= 0) {
      return performCarries(intArrayCopy, end - 1);
    } else {
      return intArray;
    }
  }
}
function add(a, b) {
  a = typeof a === 'object' ? a.slice() : toIntArray(a);
  b = typeof b === 'object' ? b.slice() : toIntArray(b);
  a.reverse();
  b.reverse();
  var len = a.length >= b.length ? a.length : b.length;
  var sum = [];
  for (var i = 0; i < len; i += 1) {
    var d1 = a[i] ? a[i] : 0;
    var d2 = b[i] ? b[i] : 0;
    sum.unshift(d1 + d2);
  }
  sum = performCarries(sum, sum.length - 1);
  return sum;
}
function multiply(num, mult) {
  num = typeof num === 'object' ? num : toIntArray(num);
  mult = typeof mult === 'object' ? mult : toIntArray(mult);
  var sum = 0;
  for (var i = mult.length - 1; i >= 0; i -= 1) {
    var m = mult[i];
    var tmpNum = [];
    for (var j = num.length - 1; j >= 0; j -= 1) {
      var digit = num[j] * m;
      tmpNum.unshift(digit);
    }
    tmpNum = performCarries(tmpNum, tmpNum.length - 1);
    for (var j = 0; j < mult.length - 1 - i; j += 1) {
      tmpNum.push(0);
    }
    sum = add(sum, tmpNum);
  }
  return sum;
}

module.exports = {
  add: add,
  multiply: multiply,
  toIntArray: toIntArray
}
