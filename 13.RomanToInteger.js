/**
 * @param {string} s
 * @return {number}
 */
const hashTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function (s) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i + 1]] > hashTable[s[i]]) {
      result -= hashTable[s[i]]
    } else {
      result += hashTable[s[i]]
    }

  }

  return result
}