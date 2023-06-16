/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 */

var s = 'a';

const lengthOfLastWord = function (s) {
  let reversedString = '';
  let flag = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      reversedString += s[i];
      flag = true;
    } else if (s[i] === ' ' && flag === true) {
      break;
    }
  }
  console.log(reversedString);
  return reversedString.length;
};

// Another solution
const lengthOfLastWord_2 = function (s) {
  let trimedInput = s.trim();
  for (let i = trimedInput.length - 1; i >= 0; i--) {

    if (trimedInput[i] !== ' ' && trimedInput.length === 1) {
        return 1;
    }

    if (trimedInput[i] === ' ') {
      return trimedInput.length - 1 - i;
    } 
  }
};

console.log(lengthOfLastWord_2(s));
