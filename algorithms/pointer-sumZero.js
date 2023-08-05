/**
 * function sumZero - accepts a sorted array of integers
 * find the first pair of integers the sum up as 0
 * return the array of the sum up
 */

// brute force solution
function sumZero_1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

//            *                     *
const arr = [-5, -3, 0, 2, 3, 4, 7, 8];
// mulitple pointer solution
function sumZero_2(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return 'No sum zero found!';
}

console.log(sumZero_2(arr));
