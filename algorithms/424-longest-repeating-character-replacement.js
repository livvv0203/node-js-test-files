/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let maxLength = 0; // Initialize the maximum length to 0.
  let charCount = new Map(); // Create a map to store character counts.
  let leftPointer = 0; // Initialize the left pointer to 0.

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Calculate the current substring length.
    let currentLength = rightPointer - leftPointer + 1;

    // Update the character count in the map.
    charCount.set(s[rightPointer], 1 + (charCount.get(s[rightPointer]) || 0));

    // Check if the current substring length minus the maximum character count exceeds k.
    if (currentLength - Math.max(...charCount.values()) > k) {
      // Adjust the left pointer and character count.
      charCount.set(s[leftPointer], charCount.get(s[leftPointer]) - 1);
      leftPointer++;
    }

    // Update the maximum length.
    currentLength = rightPointer - leftPointer + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

console.log(characterReplacement('AAAVVVBDSA', 2));
// console.log(characterReplacement('DHFGS', 2));

// var testFunction = function (s) {
//   let left = 0;
//   let right = 1;
//   let substring;
//   let result = [];
//   for (var i = 0; i < s.length; i++) {
//     left = i;
//     substring = s[i];
//     for (var j = 1; j < s.length; j++) {
//       right = j;
//       substring = substring.concat(s[j]);
//       // console.log(substring);
//       result.push(substring);
//     }
//   }
//   console.log(result);
// };

// testFunction('system');
