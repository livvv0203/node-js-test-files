/**
 * Hash Table: to store key-value pairs, not ordered
 */

/* Hash Functions */
function randomHash(key) {
  let hash = Math.floor(Math.random() * 1000);
  return hash;
}

let num = Math.random() * 1000; // 1 - 999

console.log(num.toFixed(2));
