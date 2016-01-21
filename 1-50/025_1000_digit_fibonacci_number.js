var add = require('../utils').add;

function largeFibonnaciIndex(numDigits) {
  var prevTwo = [];
  var i = 0;
  while (true) {
    if (i === 0) {
      prevTwo.push([0]);
    } else if (i === 1) {
      prevTwo.push([1]);
    } else {
      prevTwo.push(add(prevTwo[0], prevTwo[1]));
      prevTwo.shift();
    }
    if (prevTwo.length > 1) {
      if (prevTwo[1].length >= numDigits)
        return i;
    }
    i += 1;
  }
}

console.log(largeFibonnaciIndex(1000));
