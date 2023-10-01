/**
 * Given a string s, find the length of the longest 
 * substring
 * without repeating characters.

 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
};

const input = "abcabcbb";

console.log(lengthOfLongestSubstring(input));

/// TikTok 9/27 Round 2 Notes

/**
 * // Given an input string, write a function that returns the length of the longest substring without any repeating characters
// Inputs: 'pwwkew'
// p,pw,pww,pwwk, etc
// Output: wke || kew (3)

// Input: 'bb'
// Output: b (1)

// 'abc' {3}

// 1st condition: no repeating character
// 2nd condition: longest substring


const lengthOfSubString = function (s) {
    
    // sliding-window technique

    let result = 0;
    let obj = {}
    let tempSubstringCollection = [];
    for (let i = 0; i < s.length; i++) {
        let start = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if(!obj[s[j]] > 0 ) {
                // seen this char before...
                // what should I do now? I've seen this character before?
            } else {
                // add to object
                // continue building substr
                // calculate maxLeng of my result => result = Math.Max(result.lenght, newSubstr.lenght)
            }
            const newsubstring = start + s[j];
            start = newsubstring;
            // start has no repeat char

            // start = 'pw'
            // obj = {p: 0, w: 0}
            tempSubstringCollection.push(start);
        }
    }
    console.log('tempSubstringCollection: ', tempSubstringCollection);
    return tempSubstringCollection;
}

const inputString = 'pwwkew';

console.log(lengthOfSubString(inputString));

 */
