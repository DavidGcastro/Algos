// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let counter = 1;
  let spiral = Array(n)
    .fill()
    .map(() => Array(n).fill());
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    for (let i = start; i <= end; i++) {
      spiral[start][i] = counter++;
    }
    //now go down the last row
    // go thru all rows
    for (let i = start + 1; i <= end; i++) {
      //target last element
      spiral[i][end] = counter++;
    }
    //go right - left starting from the second to last element
    for (let i = end - 1; i > start; i--) {
      spiral[end][i] = counter++;
    }
    //go up starting from the first element on the last Array
    for (let i = end; i > start; i--) {
      spiral[i][start] = counter++;
    }
    start++;
    end--;
  }

  return spiral;
}

module.exports = matrix;
