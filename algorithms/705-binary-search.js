/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // use two pointers
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let m = Math.floor((left + right) / 2);
    if (nums[m] < target) {
      left = m + 1;
    } else if (nums[m] > target) {
      right = m - 1;
    } else {
      // return index of the target
      return m;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];

const target = 9;

console.log(search(nums, target));
