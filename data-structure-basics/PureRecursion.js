function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  console.log(arr);
  console.log('Printing arr after slice: ');
  console.log(arr.slice(1));
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

let result = collectOddValues([1, 2, 3, 4, 5]);
console.log(result);
