/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [1, 3, 5, 6];
let target = 2;

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    // return index if insert target to the sorted array, in the middle or at the beginning
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      }
    }
    // add to the end of the array
    return nums.length;
  }
};

console.log(searchInsert(nums, target));
