function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(' ')

  if (pattern.length !== sArr.length) {
    return false
  }

  let result = true
  const h = {}
  const wh = {}

  sArr.find((w, index) => {
    if (!h[pattern[index]]) {
      if (wh[w] && typeof wh[w] !== 'function') {
        result = false
        return true
      }

      h[pattern[index]] = w
      wh[w] = 1
    } else if (h[pattern[index]] !== w) {
      result = false
      return true
    }
  })

  return result
}
