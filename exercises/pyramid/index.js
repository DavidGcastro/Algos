// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, hashes = 1, rows = 0) {
//   if (rows === n) return;
//   let x = Array(hashes).fill('#');
//   let num = Math.floor(n - hashes / 2);
//   let spaces = Array(num).fill(' ');
//   let y = spaces.concat(x, spaces);
//   console.log(y.join(' '));
//   pyramid(n, hashes + 2, rows + 1);
// }

function pyramid(n) {
  //number on cols in each row
  let cols = 2 * n - 1;
  let midpoint = Math.floor(cols / 2);
  for (let rows = 0; rows < n; rows++) {
    let layer = '';
    for (let currentCol = 0; currentCol < cols; currentCol++) {
      //for every row we go, we need to add a hash on either side of the middle.
      //so go up to the midpoint  - the row were on on the left and + row on the right side
      //  console.log(midpoint, rows, currentCol)
      if (currentCol < midpoint - rows || currentCol > midpoint + rows) {
        layer += ' ';
      } else {
        layer += '#';
      }
    }
    console.log(layer);
  }
}

module.exports = pyramid;
