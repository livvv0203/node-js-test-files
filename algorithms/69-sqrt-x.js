/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * @param {number} x
 */

// Brute Force Solution -> Will cause a timeout on input: 1660267039
var mySqrt = function (x) {
  // Result will happen between 1 and x
  let result = 0;
  for (let i = 0; i <= x; i++) {
    let p = 0;

    if (i * i <= x) {
      p = i;
    }
    result = Math.max(result, p);
  }

  return result;
};

// console.log(mySqrt(8));

// Binary Search - in Log n time
var mySqrtBinary = function (x) {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let m;

  while (left <= right) {
    m = Math.floor((left + right) / 2);

    if (m * m > x) {
      right = m - 1;
    } else if (m * m < x) {
      left = m + 1;
    } else return m;
  }
  return right;
};

console.log(mySqrtBinary(9));
