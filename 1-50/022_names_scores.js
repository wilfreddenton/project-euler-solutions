var fs = require('fs');
var path = require('path');

var alphabeticValue = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }

function quicksort(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  var p = arr[Math.floor(arr.length / 2) - 1];
  var lesser = arr.filter(function(ele) {
    return ele < p;
  });
  var greater = arr.filter(function(ele) {
    return ele > p;
  });
  return quicksort(lesser).concat([p], quicksort(greater));
}
function nameScore(name, pos) {
  var chars = name.split('');
  var value = chars.map(function(char) {
    return alphabeticValue[char.toLowerCase()];
  }).reduce(function(prev, curr) {
    return prev + curr;
  });
  return value * pos;
}
function namesScores() {
  var names = fs.readFileSync(path.join(__dirname, 'data/022_names.txt'), 'utf8');
  names = names.replace(/"|\s/g, '').split(',');
  names = quicksort(names);
  var sum = 0;
  names.forEach(function(name, i) {
    sum += nameScore(name, i + 1);
  });
  return sum;
}

console.log(namesScores());
