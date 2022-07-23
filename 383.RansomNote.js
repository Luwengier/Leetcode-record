/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const h = {}
  const h2 = {}

  for (let i of ransomNote) {
    h[i] = h[i]
      ? h[i] + 1
      : 1
  }

  for (let i of magazine) {
    h2[i] = h2[i]
      ? h2[i] + 1
      : 1
  }

  return !Object.keys(h).some((i) =>
    !h2[i] || h[i] > h2[i]
  )
};