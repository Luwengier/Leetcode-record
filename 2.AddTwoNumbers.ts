function lengthOfLongestSubstring(s: string) {
  let m = new Map()
  let maxLength = 0
  let i = 0
  let j = 0

  while (i < s.length && j < s.length) {
    if (!m.has(s[j])) {
      m.set(s[j++], true)
      maxLength = Math.max(maxLength, j - i)
    } else {
      m.delete(s[i++])
    }
  }

  return maxLength
}
