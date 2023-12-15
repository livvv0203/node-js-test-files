/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

const majorityElement = function (nums) {
  let map = {};
  let majorityElement = -Infinity;
  let majorityElementKey;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  Object.entries(map).forEach(([key, value]) => {
    if (value > majorityElement) {
      majorityElement = value;
      majorityElementKey = key;
    }
  });
  return majorityElementKey;
};

const nums = [3, 3, 3, 4, 4, 4, 5];
const result = majorityElement(nums);
console.log(result);
