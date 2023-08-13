/**
 * Binary Search
 */

const binarySearch = function (arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== element && start <= end) {
    if (element < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }
  if (arr[middle] === element) {
    return middle;
  } else {
    return 'No such element found!';
  }
};

const result = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  111
); // 2

console.log(result);
