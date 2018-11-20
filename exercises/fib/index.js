// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let fibNums = [0, 1];
//   //loop to n and the previous nums
//   //start at index 2
//   for (let i = 2; i <= n; i++) {
//     let a = fibNums[i - 2];
//     let b = fibNums[i - 1];
//     fibNums.push(a + b);
//   }
//   return fibNums[n];
// }

let obj = {};
function memoize(func, currentArg) {
  let x = obj[currentArg]
    ? obj[currentArg]
    : (obj[currentArg] = func(currentArg));

  return x;
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return memoize(fib, n - 1) + memoize(fib, n - 2);
}

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

module.exports = fib;

//
//