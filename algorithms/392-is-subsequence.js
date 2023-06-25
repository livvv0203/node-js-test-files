/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var s = "abc";
var t = "ahbgdc";

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let subsequence = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subsequence] === t[i]) {
      // matching
      subsequence++;
    }
  }
  return subsequence === s.length;
};

var isSubsequence_2 = function (s, t) {
  // Edge case:
  if (s.length > t.length) return false;

  // loop char of shorter string
  let foundSequence = [];
  let sequence = 0;
  for (let i = 0; i < s.length; i++) {
    console.log("i is: " + s[i]);
    for (let j = sequence; j < t.length; j++) {
      if (s[i] !== t[j]) {
        continue;
      } else {
        // found matching value
        foundSequence.push(t[j]);
        sequence = j + 1;
        break;
      }
    }
  }

  return foundSequence.length === s.length;
};

console.log(isSubsequence_2(s, t));
