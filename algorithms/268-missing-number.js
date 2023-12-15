/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */
var missingNumber = function (nums) {
  let missingNums = [];
  let n = nums.length; // 2
  for (let i = 0; i <= n; i++) {
    // if i is not in nums, push it into missingNums
    if (!nums.includes(i)) {
      missingNums.push(i);
    }
    // otherwise, continue to check next one
    continue;
  }

  return missingNums;
};

var inputArr = [0, 1, 2, 3, 5, 7, 8]; // [0,1,2,3,4,5,6,7]
var result = missingNumber(inputArr);
console.log(result);
