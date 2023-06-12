/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

// Using vertical scanning
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "Invalid Input!";

  for (let i = 0; i < strs[0].length; i++) {
    // Compare each char of each string in the array
    const currentChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      // check if reaches the end of the shortest string
      if (i === strs[j].length || strs[j][i] !== currentChar) {
        return strs[0].substring(0, i);
      }
    }
  }
  // all rest of the string in array contains the first str
  return strs[0];
};

let testInput = ["flowers", "flow", "flaws"];
const result = longestCommonPrefix(testInput);
console.log(result);

