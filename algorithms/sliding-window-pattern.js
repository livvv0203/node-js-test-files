/**
 * Sliding window:
 * This patern involves creating a window that can either be an array or number from one position to another.
 */

// Using sliding window pattern
function maxSubarraySumSlideWindow(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// brute force
function maxSubarraySum(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i, i + n);
    console.log(subArr);
    let newSum = 0;
    for (let j = 0; j < subArr.length; j++) {
      newSum += subArr[j];
    }
    if (newSum > sum) {
      sum = newSum;
    }
  }

  return sum;
}

const arr = [1, 2, 5, 2, 8, 1, 5];
const n = 2;

// console.log(maxSubarraySum(arr, n));

// brute force without using js embedded functions
function maxSubarraySum_2(arr, n) {
  if (n > arr.length) return 'Invalid Input!';

  var maxSum = -Infinity; // Incase elements contain negative numbers
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let j = 0; j < n; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum_2(arr, n));
console.log('Result using Slide Window: ');
console.log(maxSubarraySumSlideWindow(arr, n));
