/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascalArr = [[1], [1, 1]];

  if (!numRows || numRows < 0) return 'Invalid Input!';

  if (!Number.isInteger(numRows)) return 'Row number is not an integer.';

  if (numRows === 1) return [[1]];

  if (numRows === 2) return [[1], [1, 1]];

  let prevLevelArr = [1, 1];

  for (let i = 3; i < numRows + 1; i++) {
    // i = 1 -> [1]
    // i = 2 -> [1, 1]
    // i = 3 -> [1, 2, 1]
    // i = 4 -> [1, 3, 3, 1]
    // i = 5 -> [1, 4, 6, 4, 1]
    let temp = [];
    // Generate the array of row i
    for (let j = 0; j < prevLevelArr.length - 1; j++) {
      let inputNum = prevLevelArr[j] + prevLevelArr[j + 1]; // 2
      temp.push(inputNum);
    }
    temp.unshift(1);
    temp.push(1);
    prevLevelArr = temp;

    // Push the row of arr into the pascal master arr
    pascalArr.push(temp);
  }

  return pascalArr;
};

console.log(generate(10));
