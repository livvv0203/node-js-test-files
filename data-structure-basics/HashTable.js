/**
 * Hash Table: to store key-value pairs, not ordered
 */

/* Hash Functions */

// Simple Hash Function
function randomHash(key) {
  let hash = Math.floor(Math.random() * 1000);
  return hash;
}

let a = "abc";

// console.log(a.charCodeAt(0) - 96);
// console.log(a.charCodeAt(1) - 96);
// console.log(a.charCodeAt(2) - 96);

// Another Hash Function
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// console.log("Hash result is: " + hash("abcdefg", 13));
const obj = {
  aaa: "123",
  bbb: "456",
};
const result = Object.keys(obj).includes("aa");
console.log(result);

let inputVal = "123";
let foundKey;
const result_2 = Object.values(obj);

console.log(Object.keys(obj)[0]);


result_2.forEach((value, index) => {
  if (value === inputVal) {
    foundKey = Object.keys(obj)[index];
  }
});
