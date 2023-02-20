function longestPalindrome(s: string): number {
  let r = 0
  let letterNumTable = {}

  for (let char of s) {
    letterNumTable[char] = (letterNumTable[char] || 0) + 1
    if (letterNumTable[char] % 2 == 0) r += 2
  }
  return s.length > r ? r + 1 : r
}
