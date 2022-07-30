/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0]

  let prevLetter = ''
  let curLetter = ''

  for (let i = 0; i < strs[0].length; i++) {
    prevLetter = strs[0][i]

    for (let j = 0; j < strs.length; j++) {
      curLetter = strs[j][i]

      if (curLetter === undefined || prevLetter !== curLetter) {
        return strs[0].slice(0, i)
      }

    }
  }

  return strs[0]
};