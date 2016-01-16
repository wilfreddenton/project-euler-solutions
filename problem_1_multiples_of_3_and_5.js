function multipleOf3And5(num) {
  if (num % 3 === 0 || num % 5 === 0)
    return true
  else
    return false
}
console.log(
  Array.apply(null, Array(1000))
    .map(function(_, i) { return i; })
    .filter(multipleOf3And5)
    .reduce(function(prev, curr) { return prev + curr; })
);
