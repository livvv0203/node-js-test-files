/**
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 */

var isHappy = function (n) {
  let isHappy = undefined; // Initialize isHappy to undefined.
  let latestN = n; // Store the latest number in a more descriptive variable.
  const squaredSet = new Set(); // Use a Set to store squared numbers for quick lookup.

  while (isHappy === undefined) {
    let squaredNumsSum = 0;
    const squaredNums = latestN
      .toString()
      .split('')
      .map((num) => num * num); // Calculate squared numbers.

    for (let i = 0; i < squaredNums.length; i++) {
      squaredNumsSum += squaredNums[i];
    }

    if (squaredNumsSum === 1) {
      isHappy = true; // Set isHappy to true if the sum is 1.
    }

    if (squaredSet.has(squaredNumsSum)) {
      isHappy = false; // Set isHappy to false if the sum is in the squaredSet.
    } else {
      squaredSet.add(squaredNumsSum); // Add the sum to the squaredSet if not seen before.
    }

    latestN = squaredNumsSum; // Update the latestN for the next iteration.
  }

  return isHappy;
};

console.log(isHappy(128));
