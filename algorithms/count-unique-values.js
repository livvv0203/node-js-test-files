function countUniqueValue(arr) {
  if (arr.length === 0) return 'Empty array!';

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const arr = [1, 1, 1, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 12, 34, 34, 42];
const arr2 = [];

console.log(countUniqueValue(arr));
console.log(countUniqueValue(arr2));
