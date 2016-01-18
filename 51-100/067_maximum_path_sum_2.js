var fs = require('fs');
var path = require('path');

function maximumPathSum(tree) {
  for (var i = tree.length - 2; i >= 0; i -= 1) {
    for (var j = 0; j <= tree[i].length - 1; j += 1) {
      if (tree[i + 1][j] > tree[i + 1][j + 1])
        tree[i][j] += tree[i + 1][j];
      else
        tree[i][j] += tree[i + 1][j + 1];
    }
  }
  return tree[0][0];
}

var tree = fs.readFileSync(path.join(__dirname, 'data/067_triangle.txt'), 'utf8');
tree = tree.split('\n').slice(0, -1).map(function(row) {
  return row.split(' ').map(function(num) {
    return parseInt(num);
  });
});

console.log(maximumPathSum(tree));
