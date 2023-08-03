/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // increment value if existing, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // no letter or letter value is 0, meaning that not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

let s = 'anagram',
  t = 'nagara';

const result = isAnagram(s, t);

console.log(result);
