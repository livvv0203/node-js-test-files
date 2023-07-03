// Given two binary strings a and b, return their sum as a binary string.
var a = '1010';
var b = '1011';

var addBinary = function (a, b) {
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = digitA + digitB + carry;
    const bit = sum % 2;
    carry = Math.floor(sum / 2);
    result = bit + result;
    i--;
    j--;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
};

console.log(addBinary(a, b));
