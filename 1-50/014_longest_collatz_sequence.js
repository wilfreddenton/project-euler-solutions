function collatzSequence(start, seq) {
  seq.push(start)
  if (start === 1) return seq;
  if (start % 2 === 0)
    start /= 2;
  else
    start = 3 * start + 1;
  return collatzSequence(start, seq);
}
function longestCollatzSequence(upperBound) {
  maxLen = 0;
  maxStart = 0;
  for (var i = 1; i < upperBound; i += 1) {
    var len = collatzSequence(i, []).length;
    if (len > maxLen) {
      maxLen = len;
      maxStart = i;
    }
  }
  return maxStart;
}
console.log(longestCollatzSequence(1000000));
