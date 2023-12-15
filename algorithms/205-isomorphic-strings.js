var isIsomorphic = function (s, t) {
  // trivial case
  if (s.length != t.length) return false;
  // Check conditions
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!m.has(s[i])) {
      m.set(s[i], t[i]);
    } else {
      if (m.get(s[i]) != t[i]) {
        return false;
      }
    }
  }
  return new Set([...m.values()]).size == m.size;
};

var s = 'badc';
var t = 'baba';

var result = isIsomorphic(s, t);
console.log(result);
