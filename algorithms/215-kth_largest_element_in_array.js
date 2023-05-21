/**
 * 215. Kth Largest Element in an Array
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * You must solve it in O(n) time complexity.
 */
let arr = [3,2,3,1,2,4,5,5,6];
let k = 4;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (arr, k) => {
  console.log('Input arr is: ' + arr);

  arr.sort(function(a, b) {
    return b - a;
  });

  console.log('Sorted Array is: ' + arr);

  let kthElement = arr[k - 1];
  return kthElement;
};

const result = findKthLargest(arr, k);

console.log(result);
