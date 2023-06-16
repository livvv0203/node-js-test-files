/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      // swap i and j
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
  console.log(i);
  console.log(nums);
  return i;
};

removeElement(nums, val);
