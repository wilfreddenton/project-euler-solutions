function isTriplet(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}
function pythagoreanTriplet(sum) {
  for (var a = 1; a <= Math.floor(sum / 2); a += 1) {
    for (var b = a + 1; b <= Math.floor(sum / 2); b += 1) {
      for (var c = b + 1; c <= Math.floor(sum / 2); c += 1) {
        if ((a + b + c) === sum && isTriplet(a, b, c)) {
          console.log(a, b, c);
          return a * b * c;
        }
      }
    }
  }
  return -1;
}

console.log(pythagoreanTriplet(1000));
