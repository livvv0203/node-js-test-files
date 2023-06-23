/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var s = 'bbb';
var t = 'ahbgdc';

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

console.log(isSubsequence(s, t));
