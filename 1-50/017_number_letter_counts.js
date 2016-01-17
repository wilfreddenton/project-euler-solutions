var digitStrings = {
  ones: {
    0: '',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  },
  teens: {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  },
  tens: {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  }
}
function stringRep(num) {
  var numArr = num.toString().split('').map(function(digit) {
    return parseInt(digit);
  });
  if (numArr.length === 1) {
    return digitStrings.ones[num];
  } else if (numArr.length === 2) {
    if (numArr[0] === 1)
      return digitStrings.teens[num]
    else
      return digitStrings.tens[numArr[0]] +
        (numArr[1] === 0 ? '' : '-' + digitStrings.ones[numArr[1]]);
  } else if (numArr.length === 3 || numArr.length === 4) {
    var mod = numArr.length === 3 ? ' hundred' : ' thousand';
    var str = digitStrings.ones[numArr[0]] + mod;
    var next = parseInt(numArr.slice(1).join(''));
    if (next === 0)
      return str;
    else
      return str + ' and ' + stringRep(next);
  }
}
function numberLetterCounts() {
  var str = ''
  for (var i = 1; i <= 1000; i += 1) {
    str += stringRep(i);
  }
  return str.replace(/-|\s/g, '').length;
}

console.log(numberLetterCounts());
