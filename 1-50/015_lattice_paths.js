// takes a very long time. might want to leave it running over night
// a much faster solution is 40 choose 20 = 40! / (20! * 20!). This is
// because there are 40! ways to arrange a string of 40 unique characters
// however 20 of our characters will be r (for right) so we reduce
// 40! by 20! and another 20 will be d (for down) so agian we reduce by 20!.
function isValid(size, loc) {
  return loc[0] <= size && loc[1] <= size;
}
function latticePaths(size, loc, paths) {
  if (loc[0] === size && loc[1] === size) {
    paths.numPaths += 1;
    return;
  }
  var downLoc = [loc[0] + 1, loc[1]];
  if (isValid(size, downLoc)) {
    latticePaths(size, downLoc, paths);
  }
  var rightLoc = [loc[0], loc[1] + 1];
  if (isValid(size, rightLoc)) {
    latticePaths(size, rightLoc, paths);
  }
}
function numLatticePaths(size) {
  var paths = { numPaths: 0 };
  latticePaths(size, [0, 0], paths);
  return paths.numPaths;
}

console.log(numLatticePaths(20));
