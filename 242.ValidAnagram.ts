function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const h = {}
  let result = true

  Array.from(s).forEach((char) => {
    h[char] = (h[char] || 0) + 1
  })

  Array.from(t).find((char) => {
    if (!h[char]) {
      result = false
      return true
    } else {
      h[char] -= 1
    }
  })

  return result
}
