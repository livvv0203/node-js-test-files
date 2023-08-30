/**
 * Select a pivot element
 */

// Swap Helper function
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Pivot Helper or Partition - Pick the 1st element in this practice
function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIndex = start; // This is what we need to return

  // Loop over every item in the array
  for (var i = start + 1; i < arr.length; i++) {
    // [4,8,2,1,5,7,6,3] - here check if 4 > 8
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      // console.log(arr);
    }
  }
  // After the loop, we swap start and the swap index
  swap(arr, start, swapIndex);
  return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];

console.log(quickSort(arr, (left = 0), (right = arr.length - 1)));
