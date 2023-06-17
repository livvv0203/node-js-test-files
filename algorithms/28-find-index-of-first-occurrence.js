/**
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */
let haystack = 'mississippi';
let needle = 'issip';

var strStr = function (haystack, needle) {
  // check length of haystack and needle
  if (haystack.length >= needle.length) {
    let j;
    for (let i = 0; i < haystack.length; i++) {
      for (j = 0; j < needle.length; j++) {
        // check each of the char in needle
        if (needle[j] !== haystack[j + i]) break;
      }
      // all char in needle are in haystack
      if (j === needle.length) return i;
    }
  }
  // no needle in haystack
  return -1;
};

console.log(strStr(haystack, needle));
